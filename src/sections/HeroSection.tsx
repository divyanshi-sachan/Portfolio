import React from "react"
import { Link } from "react-router-dom"
import { Globe } from "lucide-react"
import { ParallaxText } from "../components/ParallaxText"
export default function HeroSection() {
  return (
    <div className="min-h-screen h-screen max-h-[100dvh] bg-[#0a0a0a] relative overflow-hidden hero-gradient-overlay">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 flex flex-wrap justify-between items-center gap-3 px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8">
        <div className="text-black text-xs sm:text-sm font-medium shrink-0">© Code by Divyanshi</div>
        <nav className="flex flex-wrap gap-3 sm:gap-5 md:gap-8 items-center justify-end">
          <a href="#projects" className="text-black text-xs sm:text-sm font-medium hover:opacity-80 transition-all duration-300 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#about" className="text-black text-xs sm:text-sm font-medium hover:opacity-80 transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="text-black text-xs sm:text-sm font-medium hover:opacity-80 transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <Link to="/case-studies" className="text-black text-xs sm:text-sm font-medium hover:opacity-80 transition-all duration-300 relative group">
            Case Studies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>
      </header>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/hero.jpg"
          alt="Divyanshi - Freelance Full Stack Developer"
          className="w-full h-full object-cover object-center md:object-[center_200%] scale-105 sm:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden z-10">
        <ParallaxText
          baseVelocity={10}
          className="text-white text-4xl sm:text-5xl md:text-[8rem] lg:text-[12rem] xl:text-[14rem] font-light leading-none tracking-tight select-none whitespace-nowrap"
          wrapperClassName=""
        >
          <span className="px-2 sm:px-4">Divyanshi-Sachan</span>
        </ParallaxText>
      </div>

      {/* Location Badge */}
      <div className="absolute left-3 bottom-20 sm:left-4 sm:bottom-24 md:-left-6 md:bottom-32 lg:-left-10 lg:bottom-36 z-20">
        <div className="flex items-center gap-2 sm:gap-4 bg-black/90 rounded-full px-3 pl-10 py-2.5 sm:px-4 sm:pl-16 sm:py-4 font-medium">
          <div className="text-white text-xs sm:text-sm">
            <div className="font-medium">Located</div>
            <div className="font-medium">in India</div>
          </div>
          <div className="bg-gray-600 rounded-full p-2 sm:p-3 shrink-0">
            <Globe className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Role Text */}
      <div className="absolute right-3 top-[42%] sm:right-6 sm:top-1/2 sm:-translate-y-1/2 md:right-10 z-20 text-right">
        <div className="text-white text-lg leading-tight sm:text-2xl md:text-3xl lg:text-4xl font-light">
          <div>Freelance</div>
          <div>Full Stack Developer</div>
        </div>
      </div>
    </div>
  )
}
