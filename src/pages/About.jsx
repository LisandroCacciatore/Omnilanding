import DossierHeader from '../sections/about/DossierHeader.jsx';
import DualStreamGrid from '../sections/about/DualStreamGrid.jsx';
import ExperienceGrid from '../sections/about/ExperienceGrid.jsx';
import Credentials from '../sections/about/Credentials.jsx';
import CTAButton from '../components/CTAButton.jsx';
import SectionLabel from '../components/SectionLabel.jsx';

export default function About() {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
      <DossierHeader />
      <DualStreamGrid />
      <ExperienceGrid />
      <Credentials />

      <section className="bg-surface-container rounded-xl p-space-lg shadow-xl flex flex-col gap-space-lg border border-outline-variant/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-sm">
            <SectionLabel accent="secondary">Direct reach</SectionLabel>
            <h3 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Let's discuss systems, data, or athletic telemetry.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Whether evaluating an enterprise generative AI architecture, structuring
              end-to-end QA pipelines, or consulting on athletic strength data — I bring
              empirical rigor to every engagement.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <CTAButton to="/contact" label="Initiate contact" icon="send" full />
          </div>
        </div>
      </section>
    </div>
  );
}