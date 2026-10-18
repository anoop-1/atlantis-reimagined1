// Homepage "about" section (2026-10-18). Same JSON as the crawler HTML
// (scripts/home-first-screen.mjs → homeAboutHtml), so the copy a visitor sees
// on the rendered page is the copy crawlers read. Inline HTML in the JSON is
// limited to <a href> and <strong>.
import about from "@/data/home-about-2026-10.json";

type AboutSection = { h2: string; paragraphs?: string[]; list?: string[] };

const linkStyles =
  "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:no-underline [&_strong]:font-semibold [&_strong]:text-foreground";

export default function HomeAbout() {
  const sections = about.sections as AboutSection[];
  return (
    <section id="home-about" aria-labelledby="home-about-heading" className="py-16 bg-white">
      <div className={`container mx-auto px-6 max-w-4xl ${linkStyles}`}>
        <h2 id="home-about-heading" className="text-2xl md:text-3xl font-bold mb-4">
          {about.heading}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">{about.intro}</p>
        {sections.map((s) => (
          <div key={s.h2} className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3">{s.h2}</h2>
            {s.list ? (
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : null}
            {(s.paragraphs || []).map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
