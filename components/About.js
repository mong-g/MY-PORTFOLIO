export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-0.5 bg-primary"></span>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              I'm <span className="text-white font-medium">Elijah Alrhoy Ortega</span>, an Information Technology undergraduate at Benedicto College. 
              I'm passionate about creating modern, responsive websites and applications with a focus on 
              user experience and clean code.
            </p>
            <p>
              My educational journey includes graduating from AMA Computer Learning Center for Senior High School 
              and Mandaue City Comprehensive National High School (MCCNHS) for Junior High School.
            </p>
          </div>
          
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
             <p>
              Through my studies, I've developed skills in web development technologies including HTML, CSS, 
              JavaScript, and various frameworks. I am always eager to learn new tools and improve my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}