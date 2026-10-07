import Layout from './components/Layout.jsx';
import Hero from './sections/Hero.jsx';
import QualityMindset from './sections/QualityMindset.jsx';
import ExpectedVsActual from './sections/ExpectedVsActual.jsx';
import SoftwareQuality from './sections/SoftwareQuality.jsx';
import AIEvaluation from './sections/AIEvaluation.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import AboutContact from './sections/AboutContact.jsx';

export default function App() {
  return (
    <Layout>
      <Hero />
      <QualityMindset />
      <ExpectedVsActual />
      <SoftwareQuality />
      <AIEvaluation />
      <Projects />
      <Experience />
      <AboutContact />
    </Layout>
  );
}
