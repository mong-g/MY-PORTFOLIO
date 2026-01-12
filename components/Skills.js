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
        { name: "DaisyUI", icon: "fas fa-wind", color: "text-white" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain", color: "text-[#68a063]" },
        { name: "Express", icon: "devicon-express-original", color: "text-white" },
        { name: "Angular", icon: "devicon-angularjs-plain", color: "text-[#dd0031]" },
        { name: "Next.js", icon: "devicon-nextjs-plain", color: "text-white" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain", color: "text-[#4479a1]" },
        { name: "Workbench", icon: "fas fa-database", color: "text-[#00758f]" },
        { name: "MariaDB", icon: "fas fa-database", color: "text-[#005aab]" },
        { name: "Firebase", icon: "devicon-firebase-plain", color: "text-[#ffca28]" },
      ]
    },
    {
      title: "Tools & OS",
      skills: [
        { name: "Git", icon: "devicon-git-plain", color: "text-[#f05032]" },
        { name: "GitHub", icon: "devicon-github-original", color: "text-white" },
        { name: "VS Code", icon: "devicon-visualstudio-plain", color: "text-[#007acc]" },
        { name: "macOS", icon: "devicon-apple-original", color: "text-white" },
        { name: "Linux Mint", icon: "devicon-linux-plain", color: "text-[#87cf3e]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-0.5 bg-secondary"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group/card">
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-bg-color/50 rounded-xl border border-white/5 group-hover:border-primary/30 group-hover:bg-bg-color transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <i className={`${skill.icon} text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110 relative z-10`}></i>
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}