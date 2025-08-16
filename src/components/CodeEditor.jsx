import { useState, useEffect } from "react";
import { motion } from "motion/react";

const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  const codeLines = [
    "import React from 'react';",
    "import { motion } from 'motion/react';",
    "",
    "const Portfolio = () => {",
    "  const [isVisible, setIsVisible] = useState(false);",
    "",
    "  useEffect(() => {",
    "    setIsVisible(true);",
    "  }, []);",
    "",
    "  return (",
    "    <motion.div",
    "      initial={{ opacity: 0, y: 50 }}",
    "      animate={{ opacity: 1, y: 0 }}",
    "      transition={{ duration: 0.8 }}",
    "    >",
    "      <h1>Hello, I'm Divyanshi</h1>",
    "      <p>Full Stack Developer</p>",
    "    </motion.div>",
    "  );",
    "};",
    "",
    "export default Portfolio;"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < codeLines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedCode(codeLines.slice(0, currentLine + 1).join('\n'));
  }, [currentLine]);

  const getSyntaxColor = (line) => {
    if (line.includes('import') || line.includes('export')) return 'text-blue-400';
    if (line.includes('const') || line.includes('let') || line.includes('var')) return 'text-purple-400';
    if (line.includes('return') || line.includes('useEffect') || line.includes('useState')) return 'text-yellow-400';
    if (line.includes('motion') || line.includes('React')) return 'text-cyan-400';
    if (line.includes('div') || line.includes('h1') || line.includes('p')) return 'text-green-400';
    if (line.includes('{') || line.includes('}') || line.includes('(') || line.includes(')')) return 'text-gray-400';
    if (line.includes('//') || line.includes('/*')) return 'text-gray-500';
    return 'text-gray-300';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      {/* Code Editor Window */}
      <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        {/* Editor Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm">Portfolio.jsx</div>
          <div className="w-16"></div>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm">
          <pre className="text-left">
            {displayedCode.split('\n').map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${getSyntaxColor(line)} ${line === '' ? 'h-4' : ''}`}
              >
                <span className="text-gray-500 mr-4 select-none">
                  {String(index + 1).padStart(2, ' ')}
                </span>
                {line}
                {index === currentLine && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 bg-white w-0.5 h-4 inline-block"
                  />
                )}
              </motion.div>
            ))}
          </pre>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium"
      >
        Live
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
      >
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default CodeEditor;
