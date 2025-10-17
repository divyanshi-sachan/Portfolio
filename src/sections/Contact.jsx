import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);

  const interests = [
    "UX/UI DESIGN",
    "FULLSTACK DEVELOPER", 
    "MOBILE DEVELOPMENT",
    "DIGITAL CONSULTANT",
    "NEW BUSINESSES",
    "CALISTHENICS",
    "COOKING",
    "STARTUPS",
    "GAMING",
    "AI SOLUTIONS"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "X", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#B8B5B0] text-black"
      id="contact"
    >
      <div className="container-width">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          
          {/* Left Side - Large Text */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h1 className="heading-1">
                <div className="block">LET'S</div>
                <div className="block">CONNECT</div>
              </h1>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="text-center">
              <h2 className="heading-3 text-gray-600 uppercase tracking-wide mb-8">
                I'M ALWAYS INTERESTED ABOUT
              </h2>
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-4 justify-center">
              {interests.map((interest, index) => (
                <button
                  key={index}
                  className="px-6 py-3 text-black text-sm font-medium uppercase tracking-wide border border-black rounded-full transition-all duration-300 hover:bg-black hover:text-white"
                >
                  {interest}
                </button>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6">
              <p className="body-large text-gray-600 uppercase tracking-wide">
                ARE YOU MINDING A PROJECT?
              </p>
              <button
                className="px-8 py-4 bg-black text-white font-medium text-lg uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-gray-800"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-black/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex gap-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-black text-sm uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Credits */}
            <div className="text-black text-xs opacity-60">
              v1 v2 credits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;