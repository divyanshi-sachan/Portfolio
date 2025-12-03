import { Link } from "react-router-dom";
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal";
import CaseStudies from "../sections/CaseStudies";
import Contact from "../sections/Contact";
import ScrollProgress from "../components/ScrollProgress";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-[#cfcfd0] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300">
      <ScrollProgress />
      <header className="section-padding border-b border-black/10 dark:border-white/10">
        <div className="container-width flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-600 dark:text-gray-400">Research Portfolio</p>
            <h1 className="heading-2 mt-2">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 22,
                }}
                autoStart={true}
              >
                Case Studies
              </VerticalCutReveal>
            </h1>
            <p className="body-text text-gray-700 dark:text-gray-300 max-w-2xl mt-4">
              Deep-dives into my AI/ML projects—covering hypotheses, datasets, modeling strategy, evaluation, and the impact they created.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="px-6 py-3 rounded-full border border-black/20 bg-black/5 hover:bg-black/10 transition-all duration-300"
            >
              Back to Home
            </Link>
            <a
              href="https://calendly.com/your-calendly"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-black text-white hover:opacity-80 transition-all duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>
      </header>

      <main>
        <CaseStudies />
        <Contact />
      </main>
    </div>
  );
};

export default CaseStudiesPage;



