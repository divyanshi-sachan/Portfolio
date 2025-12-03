"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useCardTilt } from "../hooks/useCardTilt"

const MovingTechStack = () => {
  const leftCardTilt = useCardTilt(0.08);
  const devCardTilt = useCardTilt(0.08);
  const collabCardTilt = useCardTilt(0.08);

  const techIcons = [
    { name: "Git", icon: "🔶", color: "#F05032", x: 15, y: 20 },
    { name: "Vue.js", icon: "V", color: "#4FC08D", x: 25, y: 45 },
    { name: "JavaScript", icon: "JS", color: "#F7DF1E", x: 45, y: 25 },
    { name: "HTML5", icon: "5", color: "#E34F26", x: 65, y: 40 },
    { name: "Figma", icon: "🎨", color: "#F24E1E", x: 80, y: 15 },
    { name: "React", icon: "⚛️", color: "#61DAFB", x: 20, y: 70 },
    { name: "Python", icon: "🐍", color: "#3776AB", x: 50, y: 75 },
    { name: "Docker", icon: "🐳", color: "#2496ED", x: 75, y: 65 },
    { name: "Node.js", icon: "🟢", color: "#339933", x: 35, y: 55 },
    { name: "TypeScript", icon: "TS", color: "#3178C6", x: 10, y: 50 },
    { name: "CSS3", icon: "3", color: "#1572B6", x: 85, y: 45 },
    { name: "MongoDB", icon: "🍃", color: "#47A248", x: 60, y: 60 },
  ]

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="section-padding bg-[#cfcfd0] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300">
      <div className="container-width">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           <h2 className="heading-2 mb-8 text-gray-600 dark:text-gray-400">
             Focusing on the <span className="text-black dark:text-white font-normal">Best</span>
           </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Tech Icons */}
          <motion.div
            ref={leftCardTilt.ref}
            onMouseMove={leftCardTilt.handleMouseMove}
            onMouseLeave={leftCardTilt.handleMouseLeave}
            style={{
              ...leftCardTilt.style,
              rotateX: leftCardTilt.rotateX,
              rotateY: leftCardTilt.rotateY,
            }}
            className="bg-white/50 dark:bg-white rounded-2xl p-8 space-y-8 relative overflow-hidden border border-black/20 dark:border-black/20 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ minHeight: "500px", transformStyle: "preserve-3d", perspective: "1000px", rotateX: leftCardTilt.rotateX, rotateY: leftCardTilt.rotateY }}
          >
            {/* Tech Icons Grid */}
            <div className="grid grid-cols-4 gap-4">
              {techIcons.slice(0, 8).map((tech, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center relative transition-all duration-300 group-hover:shadow-lg bg-white/80 dark:bg-white/90 border border-black/20 dark:border-black/20"
                  >
                    <span className="text-sm font-bold relative z-10 text-black dark:text-white">
                      {tech.icon}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Title and Description */}
             <div className="mt-8">
               <h3 className="heading-3 mb-4">
                 <span className="text-black dark:text-black italic">Multiple</span> <span className="text-gray-600 dark:text-gray-600">Tech Stack</span>
               </h3>
               <p className="body-text text-gray-700 dark:text-gray-800 leading-relaxed">
                 I have worked with multiple technologies and frameworks to build scalable and efficient applications.
               </p>
             </div>
          </motion.div>

          {/* Right Side - Two Sections */}
          <div className="space-y-6">
            {/* Dev & Design Section */}
            <motion.div
              ref={devCardTilt.ref}
              onMouseMove={devCardTilt.handleMouseMove}
              onMouseLeave={devCardTilt.handleMouseLeave}
              style={{
                ...devCardTilt.style,
                rotateX: devCardTilt.rotateX,
                rotateY: devCardTilt.rotateY,
              }}
              className="bg-white/50 dark:bg-white rounded-2xl p-8 space-y-6 border border-black/20 dark:border-black/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              
              {/* Simple Icons */}
              <div className="flex gap-4 mb-6">
                <div className="w-14 h-14 bg-black/10 dark:bg-black/10 rounded-xl flex items-center justify-center border border-black/20 dark:border-black/20">
                  <span className="text-black dark:text-black text-xl">💾</span>
                </div>
                <div className="w-14 h-14 bg-black dark:bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white dark:text-white text-xl">🖥️</span>
                </div>
                <div className="w-14 h-14 bg-black/10 dark:bg-black/10 rounded-xl flex items-center justify-center border border-black/20 dark:border-black/20">
                  <span className="text-black dark:text-black text-xl">🎨</span>
                </div>
              </div>

              {/* Content */}
              <div>
                 <h3 className="heading-3 mb-4">
                   <span className="text-gray-600 dark:text-gray-600">Dev & </span>
                   <span className="text-black dark:text-black italic">Design</span>
                 </h3>
                <p className="body-text text-gray-700 dark:text-gray-800 leading-relaxed">
                  Excels in both development and design to create a seamless and intuitive user experience.
                </p>
              </div>
            </motion.div>

            {/* Open to Collaborations Section */}
            <motion.div
              ref={collabCardTilt.ref}
              onMouseMove={collabCardTilt.handleMouseMove}
              onMouseLeave={collabCardTilt.handleMouseLeave}
              style={{
                ...collabCardTilt.style,
                rotateX: collabCardTilt.rotateX,
                rotateY: collabCardTilt.rotateY,
              }}
              className="bg-white/50 dark:bg-white rounded-2xl p-8 space-y-6 border border-black/20 dark:border-black/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Simple MacBook Mockup */}
              <div className="relative mb-6">
                <div className="w-full max-w-sm mx-auto">
                  <div className="bg-black/10 rounded-lg p-1 border border-black/20">
                    <div className="bg-black rounded-lg p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                      <div className="text-center relative z-10">
                        <div className="text-white font-light text-2xl mb-2">MacBook</div>
                        <div className="text-white text-xl font-light">Pro</div>
                        <div className="text-gray-400 text-sm mt-2">M3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                 <h3 className="heading-3 mb-4">
                   <span className="text-gray-600 dark:text-gray-600">Open to </span>
                   <span className="text-black dark:text-black italic">Collaborations</span>
                 </h3>
                <p className="body-text text-gray-700 dark:text-gray-800 leading-relaxed">
                  Whether a small minor project or your next big SaaS, I am always open to collaborations and new
                  projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovingTechStack
