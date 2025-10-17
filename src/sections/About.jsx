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

"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const About = () => {
  const containerRef = useRef(null)
  const splineRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(0, springConfig)
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      setMousePosition({ x: mouseX, y: mouseY })

      // Update spring values for 3D effect
      x.set(mouseX * 0.01)
      rotateY.set(mouseX * 0.05)
      rotateX.set(-mouseY * 0.05)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, rotateX, rotateY])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Three.js",
    "Framer Motion",
    "Tailwind CSS",
    "Python",
  ]

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gray-400/10 to-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
      >
        {/* Left side - Text content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, rotateX: -90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-light bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Full Stack Developer & Creative Technologist
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              "I craft immersive digital experiences that seamlessly blend cutting-edge technology with intuitive design.",
              "Specializing in full-stack development, I build scalable applications using modern frameworks and cloud technologies.",
              "My passion lies in creating interactive 3D experiences, smooth animations, and performance-optimized solutions.",
              "From concept to deployment, I deliver end-to-end solutions that drive real business impact and user engagement.",
              "Always exploring the latest in web technologies, AI integration, and creative coding to push boundaries.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-white transition-colors duration-300"
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
                className="group relative"
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
                <div className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium text-center border border-white/20 hover:border-gray-400/50 transition-all duration-300 hover:bg-white/20">
                  {skill}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right side - 3D Interactive Element */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            ref={splineRef}
            className="relative w-full max-w-md lg:max-w-lg h-96 lg:h-[500px]"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* 3D Card Stack Effect */}
            <div className="absolute inset-0 perspective-1000">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255,255,255,${0.1 - i * 0.02}) 0%, 
                      rgba(128,128,128,${0.2 - i * 0.03}) 50%, 
                      rgba(255,255,255,${0.1 - i * 0.02}) 100%)`,
                    transform: `translateZ(${i * 20}px) rotateY(${i * 2}deg)`,
                    zIndex: 5 - i,
                  }}
                  animate={{
                    rotateY: [i * 2, i * 2 + 360],
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Center Content */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-gray-600 to-white flex items-center justify-center text-2xl font-bold text-black"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    DS
                  </motion.div>
                  <motion.p
                    className="text-sm font-medium text-white/80"
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Full Stack Developer
                  </motion.p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`float-${i}`}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + i * 8}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-gray-300/20 blur-xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
