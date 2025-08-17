import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const CodeforcesAPIWidget = ({ isOpen, onClose }) => {
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
      const response = await fetch('https://codeforces.com/api/user.info?handles=Divyanshi_sachan');
      const data = await response.json();
      
      if (data.status === 'OK' && data.result.length > 0) {
        setUserData(data.result[0]);
      } else {
        setError('User not found');
      }
    } catch (err) {
      setError('Failed to fetch user data');
      console.error('Error fetching Codeforces data:', err);
    } finally {
      setLoading(false);
    }
  };

  const getRankColor = (rank) => {
    const rankColors = {
      'newbie': 'text-gray-400',
      'pupil': 'text-green-400',
      'specialist': 'text-cyan-400',
      'expert': 'text-blue-400',
      'candidate master': 'text-purple-400',
      'master': 'text-orange-400',
      'international master': 'text-orange-500',
      'grandmaster': 'text-red-400',
      'international grandmaster': 'text-red-500',
      'legendary grandmaster': 'text-red-600'
    };
    return rankColors[rank?.toLowerCase()] || 'text-gray-400';
  };

  const getRankBadgeColor = (rank) => {
    const rankBadgeColors = {
      'newbie': 'bg-gray-500',
      'pupil': 'bg-green-500',
      'specialist': 'bg-cyan-500',
      'expert': 'bg-blue-500',
      'candidate master': 'bg-purple-500',
      'master': 'bg-orange-500',
      'international master': 'bg-orange-600',
      'grandmaster': 'bg-red-500',
      'international grandmaster': 'bg-red-600',
      'legendary grandmaster': 'bg-red-700'
    };
    return rankBadgeColors[rank?.toLowerCase()] || 'bg-gray-500';
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
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.327 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 15 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3C9.673 21 9 20.327 9 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 24 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V9c0-.828.673-1.5 1.5-1.5h3z"/>
                  </svg>
                  Codeforces Profile
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
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
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
                        src={userData.avatar} 
                        alt={userData.handle}
                        className="w-16 h-16 rounded-full border-2 border-gray-600"
                        onError={(e) => {
                          e.target.src = 'https://codeforces.com/userphoto/title/Divyanshi_sachan/photo.jpg';
                        }}
                      />
                      <div>
                        <h4 className="text-white font-semibold text-lg">{userData.handle}</h4>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRankBadgeColor(userData.rank)} text-white`}>
                          {userData.rank}
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.rating}</div>
                        <div className="text-gray-400 text-sm">Current Rating</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.maxRating}</div>
                        <div className="text-gray-400 text-sm">Max Rating</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.contribution}</div>
                        <div className="text-gray-400 text-sm">Contribution</div>
                      </div>
                      
                      <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-white">{userData.friendOfCount}</div>
                        <div className="text-gray-400 text-sm">Friend Of</div>
                      </div>
                    </div>
                    
                    {/* Max Rank */}
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Max Rank</div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getRankBadgeColor(userData.maxRank)} text-white`}>
                          {userData.maxRank}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href="https://codeforces.com/profile/Divyanshi_sachan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
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

export default CodeforcesAPIWidget;
