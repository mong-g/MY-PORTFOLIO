export default function Footer() {
  return (
    <footer className="bg-card-bg dark:bg-gray-800 text-text-color dark:text-white py-12 mt-20 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-accent">Elijah Alrhoy Ortega</h3>
            <p className="text-light-text dark:text-gray-400 mb-4">
              IT Student & Web Developer passionate about creating beautiful, responsive websites and applications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Elijah-gwapo" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.facebook.com/kyuu420" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/elijah-ortega-8a3347386/" target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary dark:text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#education" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Education</a></li>
              <li><a href="#projects" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-light-text dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary dark:text-accent">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope mr-3 mt-1 text-primary dark:text-accent"></i>
                <span className="text-light-text dark:text-gray-400">eaortega04@proton.me</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mr-3 mt-1 text-primary dark:text-accent"></i>
                <span className="text-light-text dark:text-gray-400">09618382725</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 mt-1 text-primary dark:text-accent"></i>
                <span className="text-light-text dark:text-gray-400">Mandaue City, Cebu, Philippines</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-light-text dark:text-gray-400">
            &copy; {new Date().getFullYear()} Elijah Alrhoy Ortega. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}