import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 3,
      title: "FONUS Cebu Federation Cooperatives",
      description: "A comprehensive memorial and funeral services platform for a federation cooperative in Cebu. Features memorial plan management, membership programs, and 24/7 service support.",
      technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "Firebase"],
      image: "/fonus.png",
      year: "2026",
      link: "https://fonuscebu.netlify.app/"
    },
    {
      id: 2,
      title: "Brisasolei Resort Booking",
      description: "A comprehensive resort booking system currently in development. Features real-time availability checking, secure payment processing, and an intuitive admin dashboard for reservation management.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "/brisasolei.png",
      year: "In Dev",
      link: "https://brisasolei.netlify.app/",
      isDevelopment: true
    },
    {
      id: 1,
      title: "Senior High Grading System",
      description: "A comprehensive grading system for Benedicto College's senior high school department, designed to streamline academic assessment processes.",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Bootstrap"],
      image: "/benedicto.jpeg",
      year: "2024",
      isAcademic: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bg-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-0.5 bg-primary"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const wrapperProps = project.link 
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper 
                key={project.id} 
                {...wrapperProps}
                className="group bg-card-bg rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 block cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-color/80 to-transparent z-10 opacity-60"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      {project.isAcademic && (
                        <span className="text-xs font-medium text-secondary tracking-wider uppercase">Academic</span>
                      )}
                      {project.isDevelopment && (
                        <span className="text-xs font-medium text-yellow-400 tracking-wider uppercase flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                          In Development
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2.5 py-1 bg-white/5 border border-white/5 text-slate-300 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}