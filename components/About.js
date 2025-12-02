export default function About() {
  return (
    <section id="about" className="py-20 bg-bg-color dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-color dark:text-white relative">
          About Me
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-light-text dark:text-gray-300 leading-relaxed">
            I'm Elijah Alrhoy Ortega, an Information Technology undergraduate at Benedicto College. 
            I'm passionate about creating modern, responsive websites and applications with a focus on 
            user experience and clean code.
          </p>
          <p className="text-lg text-light-text dark:text-gray-300 leading-relaxed">
            My educational journey includes graduating from AMA Computer Learning Center for Senior High School 
            and Mandaue City Comprehensive National High School (MCCNHS) for Junior High School. 
            Through my studies, I've developed skills in web development technologies including HTML, CSS, 
            JavaScript, and various frameworks.
          </p>
        </div>
      </div>
    </section>
  );
}