import { motion } from "framer-motion";

const FocusingOnBest = () => {
  const cards = [
    {
      title: "Multiple Tech Stack",
      description: "I have worked with multiple technologies and frameworks to build scalable and efficient applications.",
      icon: "⚙️",
      features: ["React", "Node.js", "Python", "TypeScript", "Three.js", "Firebase"]
    },
    {
      title: "Dev & Design",
      description: "Excels in both development and design to create a seamless and intuitive user experience.",
      icon: "🎨",
      features: ["UI/UX Design", "Frontend Development", "Backend Development", "Database Design"]
    },
    {
      title: "Open to Collaborations",
      description: "Whether a small minor project or your next big SaaS, I am always open to collaborations and new projects.",
      icon: "🤝",
      features: ["Freelance Projects", "Startup Collaborations", "Open Source", "Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-8 md:px-16 lg:px-24">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Focusing on the{" "}
          <span className="text-white relative">
            Best
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-[#C7FF00] transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {/* Icon */}
            <motion.div
              className="text-6xl mb-6"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-white">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {card.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              {card.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm text-gray-400">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Section - Moving Tech Stack Preview */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Moving</span> Tech Stack
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dynamic visualization of technologies I work with, constantly evolving and adapting to new challenges.
          </p>
        </div>

        {/* Tech Stack Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 max-w-6xl mx-auto">
          {[
            "React", "Next.js", "TypeScript", "Node.js", "Python", "Three.js",
            "Firebase", "MongoDB", "Git", "Vue.js", "Angular", "Docker"
          ].map((tech, index) => (
            <motion.div
              key={tech}
              className="bg-gray-800 rounded-lg p-3 text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-xs font-semibold">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FocusingOnBest;
