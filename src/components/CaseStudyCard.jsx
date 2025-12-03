import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import MagneticCard from "./MagneticCard";

const CaseStudyCard = ({ caseStudy, index }) => {
  const cardTitleRef = useRef(null);
  const cardObserverRef = useRef(null);

  useEffect(() => {
    if (!cardObserverRef.current || !cardTitleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              cardTitleRef.current?.startAnimation();
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(cardObserverRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <MagneticCard intensity={0.2}>
      <motion.article
        ref={cardObserverRef}
        className="bg-white/60 dark:bg-white rounded-2xl border border-black/10 dark:border-black/20 p-6 flex flex-col justify-between shadow-sm hover:-translate-y-2 transition-transform duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
      >
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-600">{caseStudy.focus}</p>
          <h3 className="heading-3 mt-2 text-black dark:text-black">
            <VerticalCutReveal
              ref={cardTitleRef}
              splitBy="words"
              staggerDuration={0.06}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              autoStart={false}
            >
              {caseStudy.title}
            </VerticalCutReveal>
          </h3>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-800">
          <div>
            <h4 className="font-medium uppercase tracking-wide text-sm text-gray-600 dark:text-gray-700">Problem</h4>
            <p className="body-small mt-1">{caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wide text-sm text-gray-600 dark:text-gray-700">Solution</h4>
            <p className="body-small mt-1">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wide text-sm text-gray-600 dark:text-gray-700">Impact</h4>
            <p className="body-small mt-1">{caseStudy.impact}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {caseStudy.stack.map((item) => (
            <span key={item} className="px-3 py-1 text-sm bg-black/10 dark:bg-black/10 rounded-full text-gray-800 dark:text-gray-800">
              {item}
            </span>
          ))}
        </div>
        {caseStudy.link && (
          <a
            href={caseStudy.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-black dark:text-black hover:opacity-70"
          >
            View Repository
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
    </MagneticCard>
  );
};

export default CaseStudyCard;

