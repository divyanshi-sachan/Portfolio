import { motion } from "framer-motion";
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal";
import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../constants";

const CaseStudies = () => {
  return (
    <section className="section-padding bg-[#cfcfd0] text-black" id="case-studies">
      <div className="container-width">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-600">Case Studies</p>
          <h2 className="heading-2">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 190,
                damping: 22,
                delay: 0.3,
              }}
              autoStart={true}
            >
              AI/ML projects with measurable impact
            </VerticalCutReveal>
          </h2>
          <p className="body-text text-gray-700 max-w-2xl mx-auto">
            From research tools to production-ready workflows, here’s how I apply machine learning to solve real problems
            as a student researcher and full-stack engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;



