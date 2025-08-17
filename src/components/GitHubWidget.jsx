import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const GitHubWidget = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && !userData) {
      fetchUserData();
    }
  }, [isOpen]);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://api.github.com/users/Divyanshi-sachan');
      const data = await response.json();
      
      if (response.ok) {
        setUserData(data);
      } else {
        setError('User not found');
      }
    } catch (err) {
      setError('Failed to fetch user data');
      console.error('Error fetching GitHub data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-2xl p-6 max-w-sm w-full mx-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Profile
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="bg-gray-800/50 rounded-lg p-4 min-h-[200px]">
                {loading && (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
                  </div>
                )}
                
                {error && (
                  <div className="flex items-center justify-center h-32 text-red-400">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p>{error}</p>
                    </div>
                  </div>
                )}
                
                {userData && !loading && (
                  <div className="space-y-4">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-4">
                      <img 
                        src={userData.avatar_url} 
                        alt={userData.login}
                        className="w-16 h-16 rounded-full border-2 border-gray-600"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-lg">{userData.name || userData.login}</h4>
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-500 text-white">
                          @{userData.login}
                        </span>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    {userData.bio && (
                      <div className="bg-gray-700/50 rounded-lg p-3">
                        <div className="text-sm text-gray-400 mb-1">Bio</div>
                        <p className="text-white text-sm">{userData.bio}</p>
                      </div>
                    )}
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.public_repos}</div>
                        <div className="text-gray-400 text-sm">Repositories</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.followers}</div>
                        <div className="text-gray-400 text-sm">Followers</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.following}</div>
                        <div className="text-gray-400 text-sm">Following</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.public_gists || 0}</div>
                        <div className="text-gray-400 text-sm">Gists</div>
                      </div>
                    </div>
                    
                    {/* Account Info */}
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-sm text-gray-400 mb-2">Account Info</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Type:</span>
                          <span className="text-white capitalize">{userData.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location:</span>
                          <span className="text-white">{userData.location || 'Not specified'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Member since:</span>
                          <span className="text-white">{new Date(userData.created_at).getFullYear()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href={userData?.html_url || "https://github.com/Divyanshi-sachan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 text-sm transition-colors duration-200"
                >
                  View Full Profile →
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GitHubWidget;
