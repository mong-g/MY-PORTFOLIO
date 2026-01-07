import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-card-bg dark:bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2">
          <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm mb-4">
            IT Student & Web Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-color dark:text-white">
            Elijah Alrhoy Ortega
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-primary">
            Bachelor of Science in Information Technology
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-light-text dark:text-gray-300">
            Passionate about exploring new technologies and continuously learning in the IT field. 
            Always eager to expand my knowledge and skills in web development and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link 
              href="#projects" 
              className="btn btn-primary bg-primary hover:bg-secondary text-white rounded-full px-8 py-3 transition-transform hover:-translate-y-1 shadow-lg"
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="btn btn-outline btn-primary border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-3 transition-transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
            <a 
              href="/cv.pdf" 
              download 
              className="btn btn-accent bg-accent hover:bg-primary text-white rounded-full px-8 py-3 transition-transform hover:-translate-y-1 shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-float">
            <Image 
              src="/bw-elijah.png" 
              alt="Elijah Alrhoy Ortega" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}