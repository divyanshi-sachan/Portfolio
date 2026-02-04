
// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   const containerRef = useRef(null);

//   const skills = [
//     "React", "Next.js", "TypeScript", "Node.js", 
//     "PostgreSQL", "AWS", "Docker", "GraphQL", 
//     "Three.js", "Framer Motion", "Tailwind CSS", "Python"
//   ];

//   return (
//     <section
//       ref={containerRef}
//       className="pt-20 pb-20 px-4 md:px-8 lg:px-16 bg-[#cfcfd0] text-black"
//       id="about"
//     >
//       <div className="container-width">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
//           {/* Left side - Text content with premium glass card */}
//           <motion.div
//             className="glass-card backdrop-blur-xl bg-white/10 rounded-2xl px-12 py-10 border border-white/20 relative"
//             style={{
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
//             }}
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-8 max-w-[580px]">
//               <div className="space-y-4 pt-12">
//                 <motion.h1
//                   className="heading-1"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   ABOUT ME
//                 </motion.h1>

//                 <motion.h2
//                   className="heading-3 text-gray-600"
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   Full Stack Developer & Creative Technologist
//                 </motion.h2>
//               </div>

//               <motion.div
//                 className="space-y-4"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 {[
//                   "I craft immersive digital experiences that seamlessly blend cutting-edge technology with intuitive design.",
//                   "Specializing in full-stack development, I build scalable applications using modern frameworks and cloud technologies.",
//                   "My passion lies in creating interactive experiences, smooth animations, and performance-optimized solutions.",
//                   "From concept to deployment, I deliver end-to-end solutions that drive real business impact and user engagement."
//                 ].map((text, index) => (
//                   <motion.p
//                     key={index}
//                     className="body-text text-gray-700"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     {text}
//                   </motion.p>
//                 ))}
//               </motion.div>

//               {/* Skills Grid */}
//               <motion.div
//                 className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-8"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 1.2 }}
//                 viewport={{ once: true }}
//               >
//                 {skills.map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     className="group"
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 1.3 + index * 0.05,
//                       type: "spring",
//                       stiffness: 100,
//                     }}
//                     viewport={{ once: true }}
//                     whileHover={{ scale: 1.05, y: -1 }}
//                   >
//                     <div className="px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium text-center border border-white/10 hover:-translate-y-[2px] hover:shadow-md transition-all duration-200 cursor-pointer">
//                       {skill}
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right side - About Image */}
//           <motion.div
//             className="flex justify-center lg:justify-end"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px]">
//               <img
//                 src="/assets/about.jpg"
//                 alt="About me - Working on projects"
//                 className="w-full h-full object-cover rounded-2xl border border-black/20 shadow-lg"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AmbientGrid from "../components/AmbientGrid";

const About = () => {
  const containerRef = useRef(null);
  const [mainTab, setMainTab] = useState("About");
  const [skillCategory, setSkillCategory] = useState("Frontend");

  const skillsByCategory = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    Backend: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
    Tools: ["AWS", "Docker", "Git", "Vite"]
  };

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-20 px-4 md:px-8 lg:px-24 bg-[#0a0a0a] text-white relative"
      id="about"
    >
      <AmbientGrid />
      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT — GLASS CARD */}
          <motion.div
            className="glass-card backdrop-blur-xl bg-white/5 dark:bg-white rounded-2xl px-12 py-12 border border-white/20 dark:border-black/20 relative"
            style={{
              boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 max-w-[580px]">

              {/* HEADINGS */}
              <div className="space-y-4 pt-6">
              <motion.h1
                  className="heading-1 animate-letter-expand text-black dark:text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                ABOUT ME
              </motion.h1>

              <motion.h2
                  className="heading-3 text-gray-700 dark:text-gray-800"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Full Stack Developer & Creative Technologist
              </motion.h2>
            </div>

              {/* MAIN TABS */}
              <div className="flex gap-1 mb-6 border-b border-white/20 dark:border-black/20">
                {["About", "Skills", "Experience"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setMainTab(tab)}
                    className={`px-5 py-3 text-sm font-medium transition-all duration-300 relative ${
                      mainTab === tab
                        ? "text-black dark:text-black"
                        : "text-gray-600 dark:text-gray-600 hover:text-gray-800 dark:hover:text-gray-800"
                    }`}
                  >
                    {tab}
                    {mainTab === tab && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-black"
                        layoutId="mainTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              <motion.div
                key={mainTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[300px]"
              >
                {/* ABOUT TAB */}
                {mainTab === "About" && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
            >
              {[
                "I craft immersive digital experiences that seamlessly blend cutting-edge technology with intuitive design.",
                "Specializing in full-stack development, I build scalable applications using modern frameworks and cloud technologies.",
                      "My passion lies in creating interactive experiences, smooth animations, and performance-optimized solutions."
              ].map((text, index) => (
                <motion.p
                  key={index}
                        className="body-text text-gray-800 dark:text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
                )}

                {/* SKILLS TAB */}
                {mainTab === "Skills" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Skill Category Tabs */}
                    <div className="flex gap-2 mb-6 border-b border-white/10 dark:border-black/20">
                      {Object.keys(skillsByCategory).map((category) => (
                        <button
                          key={category}
                          onClick={() => setSkillCategory(category)}
                          className={`px-4 py-2 text-xs font-medium transition-all duration-300 relative ${
                            skillCategory === category
                              ? "text-black dark:text-black"
                              : "text-gray-600 dark:text-gray-600 hover:text-gray-800 dark:hover:text-gray-800"
                          }`}
                        >
                          {category}
                          {skillCategory === category && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-black"
                              layoutId="skillCategory"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>

            {/* Skills Grid */}
            <motion.div
                      key={skillCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 md:grid-cols-3 gap-3"
                    >
                      {skillsByCategory[skillCategory].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                  transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                          <div className="px-3 py-2 bg-white/20 dark:bg-black/10 backdrop-blur-sm rounded-lg text-sm font-medium text-center border border-white/10 dark:border-black/20 hover:-translate-y-[2px] hover:shadow-md transition-all duration-200 cursor-pointer text-black dark:text-black">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </motion.div>
                  </motion.div>
                )}

                {/* EXPERIENCE TAB */}
                {mainTab === "Experience" && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      <div className="pb-4 border-b border-white/10 dark:border-black/20">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-black mb-1">Full Stack Developer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-700 mb-2">Company Name • 2023 - Present</p>
                        <p className="body-text text-gray-800 dark:text-gray-800">
                          Building scalable web applications using React, Node.js, and cloud technologies.
                        </p>
                      </div>
                      <div className="pb-4 border-b border-white/10 dark:border-black/20">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-black mb-1">Software Engineer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-700 mb-2">Previous Company • 2021 - 2023</p>
                        <p className="body-text text-gray-800 dark:text-gray-800">
                          Developed and maintained full-stack applications with focus on performance and user experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — FLOATING POLAROID FRAME */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <div className="polaroid-frame w-full max-w-md lg:max-w-lg">
              <div className="relative w-full h-80 lg:h-[420px] overflow-hidden bg-white">
              <img
                src="/assets/about.jpg"
                alt="About me - Working on projects"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="polaroid-caption">
                Building digital experiences, 2024
              </div>
              <div className="polaroid-signature">
                <span>Divyanshi</span>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;

