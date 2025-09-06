"use client";

import { motion, useInView } from "framer-motion";
import { forwardRef, useRef, ReactNode } from "react";

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants?: any;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  ({ as: Component = "div", animationNum, timelineRef, customVariants, children, className, ...props }, ref) => {
    const elementRef = useRef<HTMLElement>(null);
    const isInView = useInView(elementRef, {
      root: timelineRef,
      margin: "-100px 0px -100px 0px",
    });

    const defaultVariants = {
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
        },
      }),
      hidden: {
        y: 20,
        opacity: 0,
      },
    };

    const variants = customVariants || defaultVariants;

    return (
      <motion.div
        ref={elementRef as any}
        as={Component}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

TimelineContent.displayName = "TimelineContent";

export { TimelineContent };
