import { motion } from "framer-motion";
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal";
import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../constants";

const CaseStudies = () => {
  return (
    <section className="section-padding bg-[#0a0a0a] text-white" id="case-studies">
      <div className="container-width">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-2">Case Studies</p>
          <motion.h1
            className="heading-2 mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            AI ML PROJECTS
          </motion.h1>
          <motion.div
            className="w-24 h-px bg-white mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <p className="body-text text-gray-300 max-w-2xl mx-auto">
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



