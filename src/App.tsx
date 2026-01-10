import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Menu,
  X,
  ChevronDown,
  Download,
  Sparkles,
  Code2,
  Zap,
  Star,
  Award,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import profileImage from './assets/vassu.jpeg';

// Import project images
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.jpg';
import project3Image from './assets/project3.png';

import resumePDF from './assets/vasanth-frontend-dev-resume.pdf';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const portfolioData = {
    name: "Vasanth",
    role: "Frontend Web Developer",
    tagline: "Bridging the gap between complex logic and beautiful interfaces.",
    contact: {
      email: "vasanthanbu02@gmail.com",
      phone: "+91 7708755713",
      whatsapp: "+917708755713",
      linkedin: "https://www.linkedin.com/in/vasanth-anbu-14ab33265",
      github: "https://github.com/vasanth-anbu16",
      location: "Tiruvannamalai, India"
    },
    about: "I am a Frontend Web Developer currently working at Bmindz Pvt Ltd, with a strong foundation in Full Stack development. As an MCA graduate, I blend technical expertise in React and JavaScript with a deep understanding of backend logic (Python, Node.js). My passion lies in building scalable, user-centric web applications and exploring the intersection of AI and web technologies.",
    skills: {
      frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"],
      backend: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "Firebase"],
      other: ["React Native", "OpenCV", "Machine Learning", "Git/GitHub"]
    },
    experience: [
      {
        id: 1,
        role: "Frontend Web Developer",
        company: "Bmindz Pvt Ltd",
        period: "Aug 2025 - Present",
        description: "Developing responsive and high-performance web user interfaces. Collaborating with backend teams to integrate APIs and optimizing application speed and scalability.",
        type: "Full-time"
      },
      {
        id: 2,
        role: "Mobile App Developer Intern",
        company: "Lansub Technologies Pvt Ltd",
        period: "Jan 2025 - Apr 2025",
        description: "Developed a real-time Tourism App using React Native & Node.js. Integrated an AI chat assistant and GPS navigation for the Girivalam map.",
        type: "Internship"
      },
      {
        id: 3,
        role: "Python Programming Intern - Online",
        company: "CODTECH IT Solutions",
        period: "July 2024 - Aug 2024",
        description: "Gained hands-on experience in Python programming and data handling techniques.",
        type: "Virtual-Internship"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Personalized Tourism with AI Assistance Mobile App",
        category: "Mobile & AI",
        description: "A comprehensive tourism app for Tiruvannamalai featuring an AI chat assistant, GPS-based Girivalam map, and offline devotional music playback.",
        tags: ["React Native", "Node.js","Javascript", "Firebase", "MongoDB"],
        image: project1Image,
        bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
        githubUrl: "https://github.com/vasanth-anbu16/Girivalam-mobile-app-final-year-project"
      },
      {
        id: 2,
        title: "Age & Gender Detection",
        category: "Machine Learning",
        description: "Real-time image processing system using OpenCV and ML models. Features a Flask REST API for handling webcam capture and JSON data transfer.",
        tags: ["Python", "Flask", "OpenCV","Javascript","HTML/CSS" ],
        image: project2Image,
        bg: "bg-gradient-to-br from-violet-50 to-pink-50",
        githubUrl: "https://github.com/vasanth-anbu16/age-gender-detection-flask-webapp-mini-project"
      },
      {
        id: 3,
        title: "Bmindz Pvt Ltd",
        category: "Frontend Dev",
        description: "Contributing to various client-facing web applications at Bmindz Pvt Ltd, focusing on component reusability, responsive layouts, and performance optimization.",
        tags: ["HTML/CSS","Javascript","React", "Tailwind CSS"],
        image: project3Image,
        bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
        githubUrl: "https://bmindz.com/"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold">
              V
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              {portfolioData.name}<span className="text-blue-600">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 whitespace-nowrap ${
                  activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href={resumePDF}
              download="Vasanth_Frontend_Developer_Resume.pdf"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <Download size={14} className="hidden sm:inline" />
              <span className="text-xs sm:text-sm">Resume</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a
              href={resumePDF}
              download="Vasanth_Frontend_Developer_Resume.pdf"
              className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-medium rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              Resume
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16 bg-white">
          <div className="flex flex-col items-center gap-4 py-6 px-4 h-full overflow-y-auto">
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-lg font-semibold py-4 w-full text-center ${
                  activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex gap-4 pt-8">
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 rounded-full text-slate-700">
                <FaGithub size={22} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-100 rounded-full text-blue-600">
                <FaLinkedin size={22} />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="p-3 bg-slate-100 rounded-full text-red-500">
                <FaEnvelope size={22} />
              </a>
              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=Hi%20wassup%20lets%20connect%3F`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 rounded-full text-emerald-500"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Working at Bmindz Pvt Ltd
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Hey, I'm {portfolioData.name} 👋
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {portfolioData.role}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 lg:max-w-lg">
              {portfolioData.tagline} Experienced in <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-violet-600">Python</span>, and building modern digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-xl hover:shadow-lg transition-shadow duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronDown size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                Let's Talk
              </button>
            </div>

            <div className="flex gap-4 pt-6">
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700">
                <FaGithub size={20} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl border border-slate-200 text-blue-600">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="p-3 bg-white rounded-xl border border-slate-200 text-red-500">
                <FaEnvelope size={20} />
              </a>
              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=Hi%20wassup%20lets%20connect%3F`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-xl border border-slate-200 text-emerald-500"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 bg-white rounded-2xl shadow-xl p-1 border border-slate-200 overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Vasanth - Frontend Developer"
                  className="object-cover w-full h-full object-top"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.currentTarget.src = 'https://via.placeholder.com/400x500/1e293b/ffffff?text=Vasanth+Photo';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl text-white shadow-lg">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  About Me
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                {portfolioData.about}
              </p>

              <div className="flex items-center gap-2 text-slate-500 text-sm sm:text-base bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-md">
                <MapPin size={18} className="text-blue-600" />
                <span>Based in <span className="font-semibold text-slate-700">{portfolioData.contact.location}</span></span>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-100 shadow-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg shadow-md">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  <span className="text-blue-600">Current Focus</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Currently focused on modern Frontend Development at <strong className="text-blue-600">Bmindz Pvt Ltd</strong>, leveraging React and Tailwind CSS to build intuitive user experiences.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white shadow-lg">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Technical Arsenal
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={16} className="text-blue-600" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase text-slate-400 tracking-wider">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-br from-blue-50 to-violet-50 text-blue-700 rounded-xl text-xs sm:text-sm font-semibold border border-blue-200 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star size={16} className="text-emerald-600" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase text-slate-400 tracking-wider">Backend & Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 rounded-xl text-xs sm:text-sm font-semibold border border-emerald-200 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-violet-600" />
                    <h4 className="text-xs sm:text-sm font-bold uppercase text-slate-400 tracking-wider">Tools & Others</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.other.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white text-slate-700 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase size={14} />
              Career Journey
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Professional Experience
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white/80 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-bold px-3 py-1.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">{exp.company}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-lg">{exp.type}</span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Featured Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
              A blend of full-stack engineering and machine learning solutions crafted with passion and precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/80 rounded-3xl overflow-hidden border border-slate-200 flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => project.githubUrl && project.githubUrl !== "#" && window.open(project.githubUrl, '_blank')}
              >
                <div className="h-48 sm:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      console.error('Project image failed to load:', project.title);
                      e.currentTarget.src = `https://via.placeholder.com/400x300/1e293b/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                      {project.category}
                    </span>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ExternalLink size={18} />
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] p-8 md:p-16 lg:p-20 text-center shadow-2xl border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <FaEnvelope size={14} />
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
              Let's Create Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mt-2">
                Amazing Together
              </span>
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto mb-10 md:mb-12 text-base sm:text-lg md:text-xl px-4 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's turn your ideas into reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex flex-col items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300"
              >
                <FaEnvelope size={24} className="text-red-400" />
                <span className="font-semibold text-sm">Email</span>
                <span className="text-xs text-blue-100 truncate max-w-full">{portfolioData.contact.email}</span>
              </a>

              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="inline-flex flex-col items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300"
              >
                <FaPhone size={24} className="text-blue-400" />
                <span className="font-semibold text-sm">Call</span>
                <span className="text-xs text-blue-100">{portfolioData.contact.phone}</span>
              </a>

              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-col items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300"
              >
                <FaLinkedin size={24} className="text-blue-300" />
                <span className="font-semibold text-sm">LinkedIn</span>
                <span className="text-xs text-blue-100">Connect</span>
              </a>

              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=Hi%20I'm%20interested%20in%20connecting%20with%20you`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-col items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-colors duration-300"
              >
                <FaWhatsapp size={24} className="text-emerald-300" />
                <span className="font-semibold text-sm">WhatsApp</span>
                <span className="text-xs text-blue-100">Message</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <FaGithub size={24} className="text-white" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <FaLinkedin size={24} className="text-blue-300" />
              </a>
              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=Hi%20I'm%20interested%20in%20connecting%20with%20you`}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                <FaWhatsapp size={24} className="text-emerald-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white/80 py-8 md:py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold">
              V
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              © {new Date().getFullYear()} <span className="font-semibold text-slate-900">Vasanth</span>. Crafted with passion
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="hover:text-slate-700 transition-colors duration-300 font-medium">
              <FaGithub size={18} className="inline mr-1" />
              GitHub
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors duration-300 font-medium">
              <FaLinkedin size={18} className="inline mr-1" />
              LinkedIn
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-red-500 transition-colors duration-300 font-medium">
              <FaEnvelope size={18} className="inline mr-1" />
              Email
            </a>
            <a
              href={`https://wa.me/${portfolioData.contact.whatsapp}?text=Hi%20I'm%20interested%20in%20connecting%20with%20you`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 transition-colors duration-300 font-medium"
            >
              <FaWhatsapp size={18} className="inline mr-1" />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;