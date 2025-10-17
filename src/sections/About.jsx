// import { useRef, useEffect, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger)

// const About = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const nameRef = useRef(null)
//   const textRef = useRef(null)
//   const imageRef = useRef(null)
//   const containerRef = useRef(null)
//   const skillsRef = useRef(null)
//   const decorativeRef = useRef(null)
//   const cursorRef = useRef(null)
//   const movingTextRef = useRef(null)
//   const floatingWordsRef = useRef(null)

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none reverse",
//         },
//       })

//       // Title animation with split text effect
//       tl.fromTo(
//         titleRef.current,
//         {
//           opacity: 0,
//           y: 100,
//           rotationX: -90,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           duration: 1.2,
//           ease: "power4.out",
//         },
//       )
//         .fromTo(
//           nameRef.current,
//           {
//             opacity: 0,
//             x: -50,
//             scale: 0.8,
//           },
//           {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             duration: 1,
//             ease: "elastic.out(1, 0.5)",
//           },
//           "-=0.8",
//         )
//         .fromTo(
//           textRef.current?.children || [],
//           {
//             opacity: 0,
//             y: 30,
//             rotationY: 45,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             rotationY: 0,
//             duration: 0.8,
//             stagger: 0.1,
//             ease: "power3.out",
//           },
//           "-=0.6",
//         )

//       gsap.fromTo(
//         imageRef.current,
//         {
//           opacity: 0,
//           scale: 0.3,
//           rotationY: 180,
//           rotationX: 45,
//           z: -500,
//           filter: "blur(20px) hue-rotate(180deg)",
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           rotationY: 0,
//           rotationX: 0,
//           z: 0,
//           filter: "blur(0px) hue-rotate(0deg)",
//           duration: 2,
//           delay: 0.3,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: imageRef.current,
//             start: "top 85%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       gsap.to(imageRef.current, {
//         rotationY: "+=360",
//         duration: 20,
//         repeat: -1,
//         ease: "none",
//       })

//       gsap.to(imageRef.current, {
//         scale: 1.05,
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       })

//       gsap.to(imageRef.current, {
//         filter: "hue-rotate(360deg)",
//         duration: 8,
//         repeat: -1,
//         ease: "none",
//       })

//       gsap.fromTo(
//         skillsRef.current?.children || [],
//         {
//           opacity: 0,
//           scale: 0,
//           rotation: 180,
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           rotation: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: skillsRef.current,
//             start: "top 90%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       gsap.to(decorativeRef.current?.children || [], {
//         y: "random(-20, 20)",
//         x: "random(-10, 10)",
//         rotation: "random(-15, 15)",
//         duration: "random(2, 4)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         stagger: 0.2,
//       })

//       gsap.to(decorativeRef.current, {
//         y: -50,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         },
//       })

//       gsap.to(movingTextRef.current, {
//         x: "-100%",
//         duration: 15,
//         repeat: -1,
//         ease: "none",
//       })

//       gsap.fromTo(
//         floatingWordsRef.current?.children || [],
//         {
//           y: 0,
//           opacity: 0.7,
//         },
//         {
//           y: -30,
//           opacity: 1,
//           duration: "random(2, 4)",
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           stagger: 0.3,
//         },
//       )
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })

//       if (cursorRef.current) {
//         gsap.to(cursorRef.current, {
//           x: e.clientX - 10,
//           y: e.clientY - 10,
//           duration: 0.3,
//           ease: "power2.out",
//         })
//       }

//       if (imageRef.current) {
//         const rect = imageRef.current.getBoundingClientRect()
//         const centerX = rect.left + rect.width / 2
//         const centerY = rect.top + rect.height / 2
//         const deltaX = (e.clientX - centerX) * 0.02
//         const deltaY = (e.clientY - centerY) * 0.02

//         gsap.to(imageRef.current, {
//           rotationX: -deltaY,
//           rotationY: deltaX,
//           duration: 0.5,
//           ease: "power2.out",
//         })
//       }
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     return () => window.removeEventListener("mousemove", handleMouseMove)
//   }, [])

//   const handleImageHover = (isHovering) => {
//     gsap.to(imageRef.current, {
//       scale: isHovering ? 1.2 : 1.05,
//       rotationZ: isHovering ? 10 : 0,
//       filter: isHovering ? "brightness(1.2) contrast(1.1)" : "brightness(1) contrast(1)",
//       duration: 0.3,
//       ease: "power2.out",
//     })
//   }

//   const handleSkillHover = (element, isHovering) => {
//     gsap.to(element, {
//       scale: isHovering ? 1.1 : 1,
//       y: isHovering ? -5 : 0,
//       duration: 0.3,
//       ease: "power2.out",
//     })
//   }

//   return (
//     <section
//       ref={containerRef}
//       className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
//       id="about"
//     >
//       <div
//         ref={cursorRef}
//         className="fixed w-5 h-5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
//         style={{ top: 0, left: 0 }}
//       />

//       <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none z-5">
//         <div
//           ref={movingTextRef}
//           className="whitespace-nowrap text-8xl md:text-9xl font-bold opacity-5 select-none"
//           style={{ width: "200%" }}
//         >
//           FULL STACK DEVELOPER • REACT EXPERT • NODE.JS MASTER • FULL STACK DEVELOPER • REACT EXPERT • NODE.JS MASTER •
//         </div>
//       </div>

//       <div ref={floatingWordsRef} className="absolute inset-0 pointer-events-none z-5">
//         <div className="absolute top-32 left-20 text-2xl font-bold opacity-20 select-none">CODE</div>
//         <div className="absolute top-48 right-32 text-xl font-bold opacity-15 select-none">DESIGN</div>
//         <div className="absolute bottom-40 left-32 text-3xl font-bold opacity-25 select-none">BUILD</div>
//         <div className="absolute bottom-60 right-20 text-lg font-bold opacity-20 select-none">DEPLOY</div>
//         <div className="absolute top-60 left-1/2 text-2xl font-bold opacity-15 select-none">SCALE</div>
//       </div>

//       <div ref={decorativeRef} className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
//         <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-20"></div>
//         <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full opacity-40"></div>
//         <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full opacity-25"></div>
//         <div className="absolute top-60 left-1/2 w-1 h-1 bg-white rounded-full opacity-35"></div>
//       </div>

//       <div
//         ref={sectionRef}
//         className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
//       >
//         {/* Left side - Text content */}
//         <div className="space-y-8">
//           <div className="space-y-4">
//             <h1
//               ref={titleRef}
//               className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
//               style={{ perspective: "1000px" }}
//             >
//               ABOUT ME
//             </h1>
//             <h2 ref={nameRef} className="text-2xl md:text-3xl font-light text-gray-300">
//               Full Stack Developer
//             </h2>
//           </div>

//           <div ref={textRef} className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-200">
//             <p>I CRAFT DIGITAL EXPERIENCES THAT BRIDGE THE GAP BETWEEN DESIGN AND FUNCTIONALITY.</p>
//             <p>
//               AS A FULL STACK DEVELOPER, I BUILD END-TO-END SOLUTIONS USING MODERN TECHNOLOGIES LIKE REACT, NODE.JS, AND
//               CLOUD PLATFORMS.
//             </p>
//             <p>
//               MY EXPERTISE SPANS FROM DATABASE ARCHITECTURE TO RESPONSIVE FRONTEND INTERFACES, CREATING SEAMLESS USER
//               EXPERIENCES.
//             </p>
//             <p>
//               I SPECIALIZE IN SCALABLE WEB APPLICATIONS, API DEVELOPMENT, AND PERFORMANCE OPTIMIZATION FOR
//               ENTERPRISE-LEVEL PROJECTS.
//             </p>
//             <p>PASSIONATE ABOUT CLEAN CODE, MODERN FRAMEWORKS, AND DELIVERING SOLUTIONS THAT MAKE A REAL IMPACT.</p>
//           </div>

//           <div ref={skillsRef} className="flex flex-wrap gap-3 mt-8">
//             {["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL", "Next.js"].map(
//               (skill, index) => (
//                 <span
//                   key={skill}
//                   className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-opacity-20"
//                   onMouseEnter={(e) => handleSkillHover(e.currentTarget, true)}
//                   onMouseLeave={(e) => handleSkillHover(e.currentTarget, false)}
//                 >
//                   {skill}
//                 </span>
//               ),
//             )}
//           </div>
//         </div>

//         {/* Right side - Image */}
//         <div className="flex justify-center lg:justify-end">
//           <div
//             className="relative"
//             onMouseEnter={() => handleImageHover(true)}
//             onMouseLeave={() => handleImageHover(false)}
//           >
//             <img
//               ref={imageRef}
//               src="/public/assets/about.jpg"
//               alt="Full Stack Developer"
//               className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-2xl cursor-pointer"
//               style={{ perspective: "1000px" }}
//             />

//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white bg-opacity-15 rounded-full animate-pulse delay-75"></div>
//             <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white bg-opacity-25 rounded-full animate-pulse delay-150"></div>

//             <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "PostgreSQL", "AWS", "Docker", "GraphQL", 
    "Three.js", "Framer Motion", "Tailwind CSS", "Python"
  ];

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-20 px-4 md:px-8 lg:px-16 bg-[#B8B5B0] text-black"
      id="about"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.h1
                className="heading-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                ABOUT ME
              </motion.h1>

              <motion.h2
                className="heading-3 text-gray-600"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Full Stack Developer & Creative Technologist
              </motion.h2>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                "I craft immersive digital experiences that seamlessly blend cutting-edge technology with intuitive design.",
                "Specializing in full-stack development, I build scalable applications using modern frameworks and cloud technologies.",
                "My passion lies in creating interactive experiences, smooth animations, and performance-optimized solutions.",
                "From concept to deployment, I deliver end-to-end solutions that drive real business impact and user engagement."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="body-text text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.3 + index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="px-3 py-2 bg-black/10 rounded-lg text-sm font-medium text-center border border-black/20 hover:border-black/40 transition-all duration-300 hover:bg-black/20">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - About Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px]">
              <img
                src="/assets/about.jpg"
                alt="About me - Working on projects"
                className="w-full h-full object-cover rounded-2xl border border-black/20 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
