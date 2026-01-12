export default function Education() {
  const educationItems = [
    {
      date: "2022 - Present",
      degree: "Bachelor of Science in Information Technology",
      institution: "Benedicto College",
      description: "Currently pursuing my Bachelor's degree in Information Technology, focusing on software development, database management, and system analysis."
    },
    {
      date: "2020 - 2022",
      degree: "Senior High School - ICT Strand",
      institution: "AMA Computer Learning Center",
      description: "Specialized in Information and Communications Technology, gaining foundational knowledge in programming, web development, and computer systems."
    },
    {
      date: "2016 - 2020",
      degree: "Junior High School",
      institution: "Mandaue City Comprehensive National High School (MCCNHS)",
      description: "Completed junior high school education with a focus on science, technology, engineering, and mathematics."
    }
  ];

  return (
    <section id="education" className="py-24 bg-bg-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-0.5 bg-accent"></span>
          Education
        </h2>
        
        <div className="max-w-4xl">
          {educationItems.map((item, index) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-accent"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                <span className="text-sm font-medium text-accent">{item.date}</span>
              </div>
              
              <h4 className="text-lg text-slate-300 mb-4">{item.institution}</h4>
              <p className="text-slate-400 leading-relaxed max-w-2xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}