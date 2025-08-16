import { motion } from "motion/react";

const FloatingTechIcons = () => {
  const techIcons = [
    { name: "React", icon: "/assets/logos/react.svg", delay: 0 },
    { name: "C#", icon: "/assets/logos/csharp.svg", delay: 0.2 },
    { name: ".NET", icon: "/assets/logos/dotnet.svg", delay: 0.4 },
    { name: "JavaScript", icon: "/assets/logos/javascript.svg", delay: 0.6 },
    { name: "Tailwind", icon: "/assets/logos/tailwindcss.svg", delay: 0.8 },
    { name: "Git", icon: "/assets/logos/git.svg", delay: 1.0 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: tech.delay,
            type: "spring",
            stiffness: 200
          }}
          className="absolute"
          style={{
            top: `${20 + (index * 15)}%`,
            left: index % 2 === 0 ? '-10%' : '110%',
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              delay: index * 0.5
            }}
            className="relative group"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center p-2 hover:bg-white/20 transition-all duration-300">
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Additional floating elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute top-1/4 right-1/4"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity }
          }}
          className="w-16 h-16 border-2 border-blue-400/30 rounded-full flex items-center justify-center"
        >
          <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-1/4 left-1/4"
      >
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity }
          }}
          className="w-12 h-12 border-2 border-purple-400/30 rounded-full flex items-center justify-center"
        >
          <div className="w-6 h-6 bg-purple-400/20 rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingTechIcons;
