import SectionHeader from '../components/SectionHeader.jsx';
import { site } from '../data/site.js';
import {
  identityStack,
  aboutParagraphs,
  philosophyQuote,
} from '../data/experience.js';

export default function AboutContact() {
  const contactLinks = [
    {
      icon: 'link',
      label: 'LinkedIn',
      value: site.contact.linkedinLabel,
      href: site.contact.linkedin,
    },
    {
      icon: 'terminal',
      label: 'GitHub',
      value: site.contact.githubLabel,
      href: site.contact.github,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
  ];

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT — About */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeader
              index="05"
              label="ABOUT"
              title="QA is where I started. Evaluation is where I'm going."
            />

            <div className="p-6 rounded-lg bg-surface-container border border-outline-variant flex flex-col gap-6 shadow-xl card-lift">
              <div className="flex flex-col gap-4 pb-6 border-b border-outline-variant">
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-semibold">{site.name}</div>
                  <div className="font-mono text-xs text-primary">
                    Senior QA Analyst · AI Evaluation Projects
                  </div>
                  <div className="font-mono text-xs text-secondary mt-1">
                    Software Quality & Reliable Agentic Systems
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {identityStack.map((item) => (
                    <span
                      key={item.label}
                      className={`px-2 py-0.5 rounded bg-surface-container-low border border-outline-variant font-mono text-[10px] uppercase tracking-wide ${
                        item.highlight ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-sm text-on-surface-variant leading-relaxed flex flex-col gap-4">
                {aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="pt-2 font-mono text-sm text-primary font-semibold flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span>Same discipline. New systems.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container-low border border-outline-variant card-lift">
              <blockquote className="text-base sm:text-lg italic font-medium leading-relaxed">
                "{philosophyQuote[0]}"
                <br />
                {philosophyQuote[1]}
              </blockquote>
            </div>
          </div>

          {/* RIGHT — Contact */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-lg bg-surface-container border border-outline-variant shadow-xl flex flex-col gap-6 card-lift">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">
                  Working on a system that needs to be reliable?
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  I'm interested in projects involving software quality, AI
                  evaluation, agentic systems, automation and complex workflows.
                </p>
              </div>

              <div className="flex flex-col gap-3 font-mono text-sm">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="p-3.5 rounded bg-surface-container-low border border-outline-variant hover:border-primary text-on-surface hover:text-primary transition-all flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <span className="text-xs text-secondary group-hover:text-primary truncate ml-2">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
