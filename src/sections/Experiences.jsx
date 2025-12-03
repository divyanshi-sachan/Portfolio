import { motion } from "framer-motion";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section className="section-padding bg-[#cfcfd0] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300" id="experiences">
      <div className="container-width">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WORK EXPERIENCE
          </motion.h1>
          <motion.div
            className="w-24 h-px bg-black dark:bg-white mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/20 dark:bg-white/20 transform md:-translate-x-0.5" />
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-black dark:bg-white rounded-full transform -translate-x-2 md:-translate-x-2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                />

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/50 dark:bg-white backdrop-blur-sm rounded-2xl p-8 border border-black/20 dark:border-black/20 hover:shadow-lg transition-all duration-300">
                    {/* Date Badge */}
                    <motion.div
                      className="inline-block px-4 py-2 bg-black dark:bg-black text-white dark:text-white text-sm font-medium rounded-full mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {experience.date}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="heading-3 mb-2 text-black dark:text-black"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {experience.title}
                    </motion.h3>

                    {/* Company */}
                    <motion.h4
                      className="body-large text-gray-600 dark:text-gray-700 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {experience.job}
                    </motion.h4>

                    {/* Content */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {experience.contents.map((content, contentIndex) => (
                        <motion.p
                          key={contentIndex}
                          className="body-text text-gray-700 dark:text-gray-800 leading-relaxed"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.9 + index * 0.2 + contentIndex * 0.12,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          {content}
                        </motion.p>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
