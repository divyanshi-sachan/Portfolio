import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MagneticCard = ({ children, className = "", intensity = 0.3, ...props }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 300,
    damping: 30,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 300,
    damping: 30,
  });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${7.5 * intensity}deg`, `${-7.5 * intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${-7.5 * intensity}deg`, `${7.5 * intensity}deg`]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-20 * intensity, 20 * intensity]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-20 * intensity, 20 * intensity]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        translateX,
        translateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticCard;

