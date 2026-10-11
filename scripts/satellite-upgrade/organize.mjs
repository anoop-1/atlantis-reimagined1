// Run from scripts/satellite-upgrade/ inside the authoritative repository.
// Creates a local folder view only. Never moves source, pushes, or calls Vercel.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { sites } from './catalog.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const destination = process.argv[2] && path.resolve(process.argv[2]);
if (!destination || destination === root || destination.startsWith(root + path.sep)) {
  throw new Error('Supply a parent or sibling folder outside the repository as the destination.');
}
const workflow = fs.readFileSync(path.join(root, '.github/workflows/mirror-satellites-b.yml'), 'utf8');
const mirrorMatch = workflow.match(/SATS="([\s\S]*?)"/);
if (!mirrorMatch) throw new Error('Cannot identify the mirror sites from the checked-in workflow.');
const mirrored = new Set(mirrorMatch[1].trim().split(/\s+/));
const primaryRepository = 'https://github.com/anoop-1/atlantis-reimagined1.git';
const mirrorRepository = 'https://github.com/anoop-1/atlantis-satellites-b.git';
const origin = execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: root, encoding: 'utf8' }).trim();
if (origin !== primaryRepository) throw new Error('Unexpected source repository; verify it before creating the workspace.');
const slugSet = new Set(sites.map(site => site.slug));
if (slugSet.size !== sites.length || [...mirrored].some(slug => !slugSet.has(slug))) throw new Error('Catalogue and mirror inventory disagree.');
const exists = file => { try { return fs.lstatSync(file); } catch (error) { if (error.code === 'ENOENT') return null; throw error; } };
const rows = [...sites].sort((a, b) => a.slug.localeCompare(b.slug)).map(site => {
  if (!/^[a-z0-9-]+$/.test(site.slug)) throw new Error('Invalid site folder name.');
  const source = path.join(root, 'backlink-sites', site.slug);
  const entry = path.join(destination, site.slug);
  for (const required of ['package.json', 'vercel.json', 'src/app/page.tsx']) {
    if (!fs.existsSync(path.join(source, required))) throw new Error(`Missing ${site.slug}/${required}`);
  }
  const existing = exists(entry);
  if (existing && (!existing.isSymbolicLink() || fs.realpathSync(entry) !== fs.realpathSync(source))) {
    throw new Error(`Refusing to replace an existing folder or different link: ${entry}`);
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(source, 'package.json'), 'utf8'));
  return {
    slug: site.slug, name: site.name, domain: site.domain,
    folder: site.slug, folderLinkTarget: path.relative(destination, source),
    sourceRepository: primaryRepository, sourcePath: `backlink-sites/${site.slug}`,
    deploymentRepositoryFromWorkflow: mirrored.has(site.slug) ? mirrorRepository : primaryRepository,
    deploymentRootFromWorkflow: mirrored.has(site.slug) ? site.slug : `backlink-sites/${site.slug}`,
    mirrored: mirrored.has(site.slug), framework: `Next.js ${manifest.dependencies.next}`,
    vercelAccountMappingVerified: false,
  };
});
const marker = 'Atlantis satellite folder workspace';
const readmePath = path.join(destination, 'START HERE.md');
const inventoryPath = path.join(destination, 'site-inventory.json');
if (exists(readmePath) && !fs.readFileSync(readmePath, 'utf8').startsWith(`# ${marker}\n`)) throw new Error('Refusing to overwrite an unrelated START HERE.md.');
if (exists(inventoryPath) && JSON.parse(fs.readFileSync(inventoryPath, 'utf8')).workspace !== marker) throw new Error('Refusing to overwrite an unrelated inventory.');
fs.mkdirSync(destination, { recursive: true });
for (const row of rows) {
  const entry = path.join(destination, row.folder);
  if (!exists(entry)) fs.symlinkSync(row.folderLinkTarget, entry, 'dir');
}
const inventory = {
  workspace: marker, verifiedDate: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date()),
  repositoryFolder: path.relative(destination, root),
  branch: execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim(),
  sourceSnapshot: execFileSync('git', ['rev-parse', 'origin/main'], { cwd: root, encoding: 'utf8' }).trim(),
  scope: 'The 35 satellite websites present in the primary repository catalogue. No product applications or primary-site edits.',
  mappingEvidence: 'Checked-in mirror workflow and read-only comparison of both Git repositories. Vercel account configuration has not been authenticated.',
  sites: rows,
};
fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2) + '\n');
const table = rows.map(row => `| [${row.slug}](./${row.slug}/) | [Website](${row.domain}) | ${row.mirrored ? 'Automatic mirror' : 'Primary repository'} |`).join('\n');
const readme = `# ${marker}

All ${rows.length} available Atlantis NDT satellite websites are accessible directly from this folder, one named folder per site. Open the matching site folder to work on its files.

The site folders are relative folder links into the hidden \`.source-repository/backlink-sites\` checkout. They are not duplicate copies. This keeps the existing Git paths and deployment workflow intact. Keep the entire parent folder together if moving it; do not replace an individual folder link with a separate copy.

## Git and deployment

The isolated checkout is on \`${inventory.branch}\`. Its source snapshot is \`${inventory.sourceSnapshot}\` from [atlantis-reimagined1](https://github.com/anoop-1/atlantis-reimagined1). The original supplied project folder was left untouched.

All satellite edits belong in that primary repository under \`backlink-sites/<site>\`. The existing workflow copies ${mirrored.size} sites into [atlantis-satellites-b](https://github.com/anoop-1/atlantis-satellites-b). Do not edit or push the mirror independently. The inventory records the expected Git repository and root directory for each deployment. These mappings come from repository evidence; live Vercel account settings remain unverified because the referenced token document was not present in the supplied export or archives.

This organization does not publish anything. A future push or merge to the deployment branch can activate Vercel and the primary-site deployment workflow. Obtain owner approval before that step.

## Working on the sites

- Open a site's named folder and edit its existing \`src/app\` files.
- Shared templates and catalogue live in \`.source-repository/scripts/satellite-upgrade\`; their README describes generation and validation.
- Run Git from a site folder or \`.source-repository\`. Stage only the intended satellite or shared-tool paths.
- Leave \`out/\` and other generated build files alone. Some build exports are already tracked upstream; organization preserves them.
- No authentication tokens were copied into this workspace.

To recreate the folder links from this checkout, run \`node scripts/satellite-upgrade/organize.mjs "<parent folder>"\` from the repository root. The helper refuses to overwrite existing folders or links pointing somewhere else. Remove only the generated links and overview files to undo the folder view; the repository remains intact.

## Sites

| Folder | Public URL | Deployment route from workflow |
| --- | --- | --- |
${table}
`;
fs.writeFileSync(readmePath, readme);
console.log(JSON.stringify({ status: 'PASS', folder: destination, sites: rows.length, primary: rows.length - mirrored.size, mirrored: mirrored.size, sourceMoved: false, published: false }));
