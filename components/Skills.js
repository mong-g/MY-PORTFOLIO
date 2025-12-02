import Link from 'next/link';
import Image from 'next/image';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain", color: "text-[#e44d26]" },
        { name: "CSS3", icon: "devicon-css3-plain", color: "text-[#264de4]" },
        { name: "JavaScript", icon: "devicon-javascript-plain", color: "text-[#f0db4f]" },
        { name: "React", icon: "devicon-react-original", color: "text-[#61dbfb]" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "text-[#38bdf8]" },
        { name: "DaisyUI", icon: "fas fa-wind", color: "text-text-color dark:text-white" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain", color: "text-[#68a063]" },
        { name: "Express", icon: "devicon-express-original", color: "text-black dark:text-white" },
        { name: "Angular", icon: "devicon-angularjs-plain", color: "text-[#dd0031]" },
        { name: "Next.js", icon: "devicon-nextjs-plain", color: "text-[#000000] dark:text-white" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain", color: "text-[#4479a1]" },
        { name: "MySQL Workbench", icon: "fas fa-database", color: "text-[#00758f]" },
        { name: "MariaDB", icon: "fas fa-database", color: "text-[#005aab]" },
        { name: "Firebase", icon: "devicon-firebase-plain", color: "text-[#ffca28]" },
      ]
    },
    {
      title: "OS",
      skills: [
        { name: "Windows", icon: "devicon-windows8-original", color: "text-[#0078d7]" },
        { name: "MacOS", icon: "devicon-apple-original", color: "text-[#a2aaad]" },
        { name: "Linux", icon: "devicon-linux-plain", color: "text-[#f0f0f0] bg-black rounded-full p-1" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "devicon-git-plain", color: "text-[#f05032]" },
        { name: "GitHub", icon: "devicon-github-original", color: "text-[#181717] dark:text-white" },
        { name: "VS Code", icon: "devicon-visualstudio-plain", color: "text-[#007acc]" },
        { name: "UI/UX Design", icon: "fas fa-paint-brush", color: "text-[#fd6c6c]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card-bg dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-color dark:text-white relative">
          My Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accent flex items-center">
                <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full mr-2"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                      skill.name === "MySQL Workbench" ? (
                        <div 
                          key={skillIndex} 
                          className="flex flex-col items-center p-4 bg-bg-color dark:bg-gray-600 rounded-lg shadow transition-transform hover:-translate-y-2 hover:shadow-xl w-24"
                        >
                          <i className="fas fa-dolphin text-2xl mb-2 text-[#00758f]"></i>
                          <span className="text-sm text-text-color dark:text-white">Workbench</span>
                        </div>
                      ) : skill.name === "MariaDB" ? (
                        <div 
                          key={skillIndex} 
                          className="flex flex-col items-center p-4 bg-bg-color dark:bg-gray-600 rounded-lg shadow transition-transform hover:-translate-y-2 hover:shadow-xl w-24"
                        >
                          <i className="fas fa-seal text-2xl mb-2 text-[#005aab]"></i>
                          <span className="text-sm text-text-color dark:text-white">MariaDB</span>
                        </div>
                      ) : (
                        <div 
                          key={skillIndex} 
                          className="flex flex-col items-center p-4 bg-bg-color dark:bg-gray-600 rounded-lg shadow transition-transform hover:-translate-y-2 hover:shadow-xl w-24"
                        >
                          <i className={`${skill.icon} text-2xl mb-2 ${skill.color}`}></i>
                          <span className="text-sm text-text-color dark:text-white">{skill.name}</span>
                        </div>
                      )
                    ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}