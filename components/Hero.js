import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-bg-color relative overflow-hidden">
      
      {/* Background Profile Image (Behind Text) */}
      <div className="absolute right-0 top-0 w-full h-full md:w-[60%] opacity-50 md:opacity-70 pointer-events-none select-none">
        <Image 
          src="/bw-elijah.png" 
          alt="Elijah Alrhoy Ortega Background" 
          fill
          className="object-cover object-right"
          priority
        />
        {/* Subtle left-side fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-color via-bg-color/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Role / Sub-headline */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-500 mb-2 tracking-wide uppercase">
            IT Student & Web Developer
          </h2>

          {/* Main Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none mb-8">
            ELIJAH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-600">ORTEGA</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-primary/50 pl-6">
            I build accessible, pixel-perfect, and performant web experiences. 
            Currently focused on mastering full-stack development and creating 
            seamless user interfaces.
          </p>

          {/* Action Area */}
          <div className="flex flex-col items-start gap-8">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/10 hover:border-white/40 text-white font-medium rounded-lg transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              <i className="far fa-file-alt text-xs text-slate-400"></i> 
              View Resume
            </a>

            <Link 
              href="#projects" 
              className="group flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:text-primary hover:border-primary transition-all duration-300"
            >
              <span className="text-lg font-medium">View Selected Works</span>
              <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}