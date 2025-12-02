import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const ImageComparison = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  containerClassName,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl overflow-hidden border border-black/20 bg-white/60 shadow-sm",
        containerClassName
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {/* Before Image (Background) */}
      <div className="relative w-full h-full">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-auto object-cover block"
          draggable={false}
        />
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-auto object-cover block"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-black/80 z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full border-2 border-white shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
          onMouseDown={handleMouseDown}
        >
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-white rounded-full" />
            <div className="w-1 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium uppercase tracking-wide">
        {beforeLabel}
      </div>
      <div
        className="absolute top-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium uppercase tracking-wide"
        style={{ right: `${100 - sliderPosition}%` }}
      >
        {afterLabel}
      </div>
    </motion.div>
  );
};

export default ImageComparison;

