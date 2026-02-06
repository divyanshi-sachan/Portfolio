import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal";
import { myProjects } from "../constants";
import { useCardTilt } from "../hooks/useCardTilt";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  // Temporarily disabled GSAP animations to isolate image display issue
  // useEffect(() => {
  //   if (!sectionRef.current || !projectsRef.current) return;
    
  //   const ctx = gsap.context(() => {
  //     // Animate projects on scroll
  //     const children = projectsRef.current?.children;
  //     if (children && children.length > 0) {
  //       gsap.fromTo(
  //         children,
  //         {
  //           opacity: 0,
  //           y: 100,
  //         },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 1,
  //           stagger: 0.3,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: sectionRef.current,
  //             start: "top 80%",
  //             end: "bottom 20%",
  //             toggleActions: "play none none reverse",
  //           },
  //         }
  //       );
  //     }
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);


  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`);
  };

  const ProjectCard = ({ project, index }) => {
    const tilt = useCardTilt(0.1);
    const [isHovered, setIsHovered] = useState(false);
    // Temporarily disabled GSAP animations to isolate image display issue
    // const cardRef = useRef(null);

    // useEffect(() => {
    //   const ctx = gsap.context(() => {
    //     gsap.fromTo(
    //       cardRef.current,
    //       {
    //         opacity: 0,
    //         y: 50,
    //       },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.8,
    //         delay: index * 0.2,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: cardRef.current,
    //           start: "top 85%",
    //           end: "bottom 20%",
    //           toggleActions: "play none none reverse",
    //         },
    //       }
    //     );
    //   }, cardRef);

    //   return () => ctx.revert();
    // }, [index]);

    return (
      <motion.div
        ref={tilt.ref}
        onMouseMove={tilt.handleMouseMove}
        onMouseLeave={() => { tilt.handleMouseLeave(); setIsHovered(false); }}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          ...tilt.style,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        className="group cursor-pointer mb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          ease: "easeOut"
        }}
        viewport={{ once: true, margin: "-100px" }}
        onClick={() => handleProjectClick(project)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="heading-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.05}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.4 + index * 0.2,
                  }}
                  autoStart={true}
                >
                  {project.title.toUpperCase()}
                </VerticalCutReveal>
              </motion.h2>
              <motion.p 
                className="body-large text-gray-400 uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {project.tags.slice(0, 3).map(tag => tag.name).join(', ').toUpperCase()}
                {project.tags.length > 3 && `, +${project.tags.length - 3} MORE`}
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Image: B&W by default, original color on hover; smooth scale via Framer */}
          <motion.div 
            className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="project-image-container rounded-lg overflow-hidden"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{
                type: "tween",
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image w-full h-full object-cover grayscale transition-[filter] duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:grayscale-0"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="section-padding bg-[#0a0a0a] text-white relative"
        id="projects"
      >
        <div className="container-width relative z-10">
          {/* Header - same style as Work Experience */}
          <motion.div
            className="text-center mb-20 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="heading-2 mb-4 text-white w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-center">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 22,
                  delay: 0.2,
                }}
                autoStart={true}
              >
                MY BIG PROJECTS
              </VerticalCutReveal>
              </span>
            </motion.h1>
            <motion.div
              className="w-24 h-px bg-white mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Projects List */}
          <div ref={projectsRef} className="space-y-0">
            {myProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;