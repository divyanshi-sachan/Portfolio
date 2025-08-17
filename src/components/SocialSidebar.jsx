import { motion } from "motion/react";
import { useState } from "react";
import CodeforcesAPIWidget from "./CodeforcesAPIWidget";
import LinkedInWidget from "./LinkedInWidget";
import GitHubWidget from "./GitHubWidget";
import LeetCodeWidget from "./LeetCodeWidget";

const SocialSidebar = () => {
  const [isCodeforcesOpen, setIsCodeforcesOpen] = useState(false);
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false);
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isLeetCodeOpen, setIsLeetCodeOpen] = useState(false);
  const socialLinks = [
    {
      name: "GitHub",
      url: null, // Will be handled by modal
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:text-gray-400",
      isModal: true,
      modalType: "github"
    },
    {
      name: "LinkedIn",
      url: null, // Will be handled by modal
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-400",
      isModal: true,
      modalType: "linkedin"
    },
    {
      name: "LeetCode",
      url: null, // Will be handled by modal
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.594.637.637 0 0 0 .912.745l4.158-2.173 3.861-2.89a1.458 1.458 0 0 1 1.759.094l2.636 2.636a1.374 1.374 0 0 0 1.941 0l5.953-5.953a1.374 1.374 0 0 0 0-1.941L14.445.438A1.374 1.374 0 0 0 13.483 0zM9.35 14.862a.637.637 0 0 0-.912-.745l-4.158 2.173-3.861 2.89a1.458 1.458 0 0 1-1.759-.094L.439 13.483a1.374 1.374 0 0 0 0 1.941l5.953 5.953a1.374 1.374 0 0 0 1.941 0l2.636-2.636a1.458 1.458 0 0 1 1.759-.094l3.861 2.89 4.158 2.173a.637.637 0 0 0 .912-.745 5.266 5.266 0 0 0-1.049-4.594L16.884 6.226l-3.854-4.126a1.374 1.374 0 0 0-.961-.438z"/>
        </svg>
      ),
      color: "hover:text-yellow-400",
      isModal: true,
      modalType: "leetcode"
    },
    {
      name: "Codeforces",
      url: null, // Will be handled by modal
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.327 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 15 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3C9.673 21 9 20.327 9 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 24 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V9c0-.828.673-1.5 1.5-1.5h3z"/>
        </svg>
      ),
      color: "hover:text-red-400",
      isModal: true,
      modalType: "codeforces"
    }
  ];

  return (
    <>
      {/* Codeforces Widget Modal */}
      <CodeforcesAPIWidget 
        isOpen={isCodeforcesOpen} 
        onClose={() => setIsCodeforcesOpen(false)} 
      />
      
      {/* LinkedIn Widget Modal */}
      <LinkedInWidget 
        isOpen={isLinkedInOpen} 
        onClose={() => setIsLinkedInOpen(false)} 
      />
      
      {/* GitHub Widget Modal */}
      <GitHubWidget 
        isOpen={isGitHubOpen} 
        onClose={() => setIsGitHubOpen(false)} 
      />
      
      {/* LeetCode Widget Modal */}
      <LeetCodeWidget 
        isOpen={isLeetCodeOpen} 
        onClose={() => setIsLeetCodeOpen(false)} 
      />
      
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="flex flex-col space-y-6">
                  {socialLinks.map((link, index) => (
          <motion.button
            key={link.name}
            onClick={() => {
              if (link.isModal) {
                if (link.modalType === 'codeforces') {
                  setIsCodeforcesOpen(true);
                } else if (link.modalType === 'linkedin') {
                  setIsLinkedInOpen(true);
                } else if (link.modalType === 'github') {
                  setIsGitHubOpen(true);
                } else if (link.modalType === 'leetcode') {
                  setIsLeetCodeOpen(true);
                }
              } else if (link.url) {
                window.open(link.url, '_blank', 'noopener,noreferrer');
              }
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
            className={`group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
            <span className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </motion.button>
        ))}
        </div>
        
        {/* Vertical line connecting the icons */}
        <div className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent -z-10" />
      </motion.div>

      {/* Mobile Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20 lg:hidden"
      >
        <div className="flex space-x-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 px-4 py-3">
          {socialLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => {
                if (link.isModal) {
                  if (link.modalType === 'codeforces') {
                    setIsCodeforcesOpen(true);
                  } else if (link.modalType === 'linkedin') {
                    setIsLinkedInOpen(true);
                  } else if (link.modalType === 'github') {
                    setIsGitHubOpen(true);
                  } else if (link.modalType === 'leetcode') {
                    setIsLeetCodeOpen(true);
                  }
                } else if (link.url) {
                  window.open(link.url, '_blank', 'noopener,noreferrer');
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className={`group flex items-center justify-center w-10 h-10 bg-white/5 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mb-2">
                {link.name}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SocialSidebar;
