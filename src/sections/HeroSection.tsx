import React from "react"
import { Globe, ChevronDown } from "lucide-react"
import { ParallaxText } from "../components/ParallaxText"

export default function HeroSection() {
  return (
    <div className="h-screen bg-[#B8B5B0] relative overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-10 py-8">
        <div className="text-black text-sm font-medium">© Code by Divyanshi</div>
        <nav className="flex gap-8">
          <a href="#work" className="text-black text-sm font-medium hover:opacity-80 transition-opacity">
            Work
          </a>
          <a href="#about" className="text-black text-sm font-medium hover:opacity-80 transition-opacity">
            About
          </a>
          <a href="#contact" className="text-black text-sm font-medium hover:opacity-80 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/hero.jpg"
          alt="Divyanshi - Freelance Designer & Developer"
          className="w-full h-full object-cover object-[center_200%] scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden z-10">
        <ParallaxText
          baseVelocity={10}
          className="text-white text-[12rem] md:text-[14rem] lg:text-[16rem] font-light leading-none tracking-tight select-none whitespace-nowrap"
          wrapperClassName=""
        >
          <span className="px-4">Divyanshi-Sachan</span>
        </ParallaxText>
      </div>

      {/* Location Badge */}
      <div className="absolute -left-10 bottom-88 z-20">
        <div className="flex items-center gap-4  bg-black rounded-full px-4 pl-16 py-4 font-medium">
          <div className="text-white text-sm">
            <div className="font-medium">Located</div>
            <div className="font-medium">in </div>
            <div className="font-medium">India</div>
          </div>
          <div className="bg-gray-600 rounded-full p-3">
            <Globe className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Role Text */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20">
        <div className="text-white text-right">
          <div className="text-4xl font-light leading-tight">Freelance</div>
          <div className="text-4xl font-light leading-tight">Designer & Developer</div>
        </div>
      </div>

    </div>
  )
}
