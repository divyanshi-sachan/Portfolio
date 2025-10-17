"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const MovingTechStack = () => {
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
    <div className="w-full bg-black py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-400">
             Focusing on the <span className="text-white font-normal">Best</span>
           </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Floating Tech Icons */}
          <motion.div
            className={`bg-gray-900/50 rounded-2xl p-8 space-y-8 relative overflow-hidden border transition-all duration-300 cursor-pointer group ${
              hoveredCard === 'tech-stack' ? 'border-white' : 'border-gray-800'
            }`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ minHeight: "500px" }}
            onMouseEnter={() => setHoveredCard('tech-stack')}
            onMouseLeave={() => setHoveredCard(null)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              setMousePosition({ x, y })
            }}
          >
            {/* Hover overlay */}
            {hoveredCard === 'tech-stack' && (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: mousePosition.x - 100,
                  top: mousePosition.y - 100,
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {/* Floating Tech Icons */}
            <div className="relative w-full h-96">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${tech.x}%`,
                    top: `${tech.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.4 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Neon Glow Effect on Hover */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center relative transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      backgroundColor: tech.color + "20",
                      border: `1px solid ${tech.color}40`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: `0 0 20px ${tech.color}60, 0 0 40px ${tech.color}30`,
                      }}
                    />
                    <span className="text-sm font-bold relative z-10" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Title and Description */}
             <div className="mt-8">
               <h3 className="text-3xl font-light mb-4">
                 <span className="text-white italic">Multiple</span> <span className="text-gray-400">Tech Stack</span>
               </h3>
               <p className="text-gray-300 leading-relaxed">
                 I have worked with multiple technologies and frameworks to build scalable and efficient applications.
               </p>
             </div>
          </motion.div>

          {/* Right Side - Two Sections */}
          <div className="space-y-6">
            {/* Dev & Design Section */}
            <motion.div
              className={`bg-gray-900/50 rounded-2xl p-8 space-y-6 border transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                hoveredCard === 'dev-design' ? 'border-white' : 'border-gray-800'
              }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard('dev-design')}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                setMousePosition({ x, y })
              }}
            >
              {/* Hover overlay */}
              {hoveredCard === 'dev-design' && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Icons with electricity animation */}
              <div className="flex gap-4 mb-6 relative">
                <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center border border-gray-600 relative z-10">
                  <span className="text-white text-xl">💾</span>
                </div>
                
                {/* Electricity line 1 */}
                <motion.div
                  className="absolute top-1/2 left-14 w-4 h-0.5 bg-white z-0"
                  style={{ transform: 'translateY(-50%)' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                />
                
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center relative z-10">
                  <span className="text-black text-xl">🖥️</span>
                </div>
                
                {/* Electricity line 2 */}
                <motion.div
                  className="absolute top-1/2 left-32 w-4 h-0.5 bg-white z-0"
                  style={{ transform: 'translateY(-50%)' }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                
                <div className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center border border-gray-600 relative z-10">
                  <span className="text-white text-xl">🎨</span>
                </div>
              </div>

              {/* Content */}
              <div>
                 <h3 className="text-3xl font-light mb-4">
                   <span className="text-gray-400">Dev & </span>
                   <span className="text-white italic">Design</span>
                 </h3>
                <p className="text-gray-300 leading-relaxed">
                  Excels in both development and design to create a seamless and intuitive user experience.
                </p>
              </div>
            </motion.div>

            {/* Open to Collaborations Section */}
            <motion.div
              className={`bg-gray-900/50 rounded-2xl p-8 space-y-6 border transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                hoveredCard === 'collaborations' ? 'border-white' : 'border-gray-800'
              }`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard('collaborations')}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                setMousePosition({ x, y })
              }}
            >
              {/* Hover overlay */}
              {hoveredCard === 'collaborations' && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {/* MacBook Image */}
              <div className="relative mb-6">
                <div className="w-full max-w-sm mx-auto">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-1">
                    <div className="bg-black rounded-lg p-6 aspect-video flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-purple-900/20"></div>
                      <div className="text-center relative z-10">
                        <div className="text-gray-300 font-light text-4xl mb-2">MacBook</div>
                        <div className="text-red-400 text-2xl font-light">Pro</div>
                        <div className="text-gray-500 text-sm mt-2">M3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                 <h3 className="text-3xl font-light mb-4">
                   <span className="text-gray-400">Open to </span>
                   <span className="text-white italic">Collaborations</span>
                 </h3>
                <p className="text-gray-300 leading-relaxed">
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
