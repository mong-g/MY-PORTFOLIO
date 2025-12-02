import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Senior High Grading System",
      description: "This is an academic project: A comprehensive grading system for Benedicto College's senior high school department, designed to streamline academic assessment processes.",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Bootstrap"],
      image: "/benedicto.jpeg",
      year: "2024",
      isAcademic: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-bg-color dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-color dark:text-white relative">
          Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-3 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-accent mb-2">{project.year}</div>
                  {project.isAcademic && (
                    <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Academic Project</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-color dark:text-white">{project.title}</h3>
                <p className="text-light-text dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-card-bg dark:bg-gray-700 text-text-color dark:text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}