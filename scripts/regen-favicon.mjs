import sharp from 'sharp';
import { writeFileSync } from 'fs';

const SRC = 'E:/software/Atlantis/atlantis-reimagined1/public/atlantis.png';
const OUT = 'E:/software/Atlantis/atlantis-reimagined1/public';

// atlantis.png is 149x160 (not square) — pad onto a transparent square canvas
// at high resolution first, then downsample from that crisp master for every
// output size. The live favicon-96x96.png / favicon.ico turned out to only
// carry 32x33 pixel data internally (misleadingly named), hence the blur.
const MASTER_SIZE = 512;

async function buildMasterSquare() {
  const img = sharp(SRC);
  const meta = await img.metadata();
  const scale = (MASTER_SIZE * 0.82) / Math.max(meta.width, meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const resized = await sharp(SRC).resize(w, h, { fit: 'inside' }).toBuffer();
  return sharp({
    create: {
      width: MASTER_SIZE,
      height: MASTER_SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
}

async function main() {
  const master = await buildMasterSquare();
  writeFileSync(`${OUT}/atlantis-icon-master-512.png`, master);

  // Transparent favicon PNGs at each size, from the crisp square master
  for (const size of [96, 32, 16, 48]) {
    const buf = await sharp(master).resize(size, size).png().toBuffer();
    writeFileSync(`${OUT}/favicon-${size}x${size}.png`, buf);
  }

  // apple-touch-icon — white backing so it doesn't render as a black square
  // on iOS home screens with a transparent source image
  const appleSize = 180;
  const appleTrident = await sharp(master)
    .resize(Math.round(appleSize * 0.72), Math.round(appleSize * 0.72), { fit: 'inside' })
    .png()
    .toBuffer();
  const apple = await sharp({
    create: {
      width: appleSize,
      height: appleSize,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: appleTrident, gravity: 'center' }])
    .png()
    .toBuffer();
  writeFileSync(`${OUT}/apple-touch-icon.png`, apple);

  // Build a proper multi-size .ico (16/32/48), PNG-compressed entries —
  // supported by every modern browser.
  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map((s) => sharp(master).resize(s, s).png().toBuffer())
  );

  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * icoSizes.length;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(icoSizes.length, 4);

  const dirEntries = [];
  const imageBuffers = [];
  icoSizes.forEach((size, i) => {
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buf.length;
    dirEntries.push(entry);
    imageBuffers.push(buf);
  });

  const ico = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  writeFileSync(`${OUT}/favicon.ico`, ico);

  console.log('Done. Wrote favicon-16/32/48/96x96.png, apple-touch-icon.png, favicon.ico, atlantis-icon-master-512.png');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
