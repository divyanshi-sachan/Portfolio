import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      <div
        className="group cursor-pointer mb-20"
        onClick={() => handleProjectClick(project)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                {project.title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-300 uppercase tracking-wide">
                {project.tags.slice(0, 3).map(tag => tag.name).join(', ').toUpperCase()}
                {project.tags.length > 3 && `, +${project.tags.length - 3} MORE`}
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
            <div className="project-image-container rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="project-image transition-transform duration-700 group-hover:scale-105"
                onLoad={() => console.log('Project image loaded:', project.image)}
                onError={() => console.log('Project image failed:', project.image)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen bg-black text-white py-20 px-4 md:px-8 lg:px-16"
        id="projects"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 mr-4">
                <svg
                  className="w-full h-full text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                OUR BIG PROJECTS
              </h1>
            </div>
            <div className="w-full h-px bg-gray-700" />
          </div>

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