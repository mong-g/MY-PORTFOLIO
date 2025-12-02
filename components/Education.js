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
    <section id="education" className="py-20 bg-bg-color dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-color dark:text-white relative">
          Education
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <div key={index} className="mb-8 relative pl-8 border-l-2 border-primary dark:border-accent">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary dark:bg-accent"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                <div className="text-sm font-semibold text-primary dark:text-accent mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-text-color dark:text-white mb-1">{item.degree}</h3>
                <h4 className="text-lg text-text-color dark:text-gray-200 mb-3">{item.institution}</h4>
                <p className="text-light-text dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}