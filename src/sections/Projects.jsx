import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal";
import { myProjects } from "../constants";
import ProjectShowcase from "../components/ProjectShowcase";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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
    setSelectedProject(project);
  };

  const closeShowcase = () => {
    setSelectedProject(null);
  };

  const ProjectCard = ({ project, index }) => {
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
                className="body-large text-gray-600 uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {project.tags.slice(0, 3).map(tag => tag.name).join(', ').toUpperCase()}
                {project.tags.length > 3 && `, +${project.tags.length - 3} MORE`}
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div 
            className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image-container rounded-lg overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-image transition-transform duration-700 group-hover:scale-110"
                onLoad={() => console.log('Project image loaded:', project.image)}
                onError={() => console.log('Project image failed:', project.image)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"
                whileHover={{ opacity: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="section-padding bg-[#cfcfd0] text-black"
        id="projects"
      >
        <div className="container-width">
          {/* Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-8 h-8 mr-4"
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <svg
                  className="w-full h-full text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </motion.div>
              <motion.h1 
                className="heading-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <VerticalCutReveal
                  splitBy="words"
                  staggerDuration={0.1}
                  staggerFrom="first"
                  transition={{
                    type: "spring",
                    stiffness: 190,
                    damping: 22,
                    delay: 0.6,
                  }}
                  autoStart={true}
                >
                  OUR BIG PROJECTS
                </VerticalCutReveal>
              </motion.h1>
            </motion.div>
            <motion.div 
              className="w-full h-px bg-black/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
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

      {/* Project Showcase */}
      {selectedProject && (
        <ProjectShowcase 
          project={selectedProject} 
          onClose={closeShowcase} 
        />
      )}
    </>
  );
};

export default Projects;