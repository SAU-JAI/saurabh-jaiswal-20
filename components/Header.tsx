import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { jsPDF } from "jspdf";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate active section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Find the section currently in view
      const currentSection = NAV_LINKS.find(link => {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.name);
      } else if (window.scrollY < 100) {
        // Default to the link pointing to the top (Reel/Hero) if near top
        const heroLink = NAV_LINKS.find(l => l.href === '#hero');
        if (heroLink) setActiveSection(heroLink.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(NAV_LINKS.find(link => link.href === href)?.name || '');
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const doc = new jsPDF();
    
    // Configuration
    const margin = 20;
    const pageWidth = 170; // 210 - 2*20
    let yPos = 20;
    const lineHeight = 5;
    const black = "#000000";
    const darkGray = "#444444";

    // Helper Functions
    const addSectionTitle = (title: string) => {
      yPos += 4;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(black);
      doc.text(title.toUpperCase(), margin, yPos);
      yPos += 2;
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPos, margin + pageWidth, yPos);
      yPos += 5;
    };

    const addRole = (role: string, company: string, date: string) => {
        // Company and Date line
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text(company, margin, yPos);
        
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.text(date, 210 - margin, yPos, { align: "right" });
        
        yPos += lineHeight;
        
        // Role
        doc.setFont("helvetica", "bold");
        doc.text(role, margin, yPos);
        yPos += lineHeight;
    };

    const addBullet = (text: string) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const splitText = doc.splitTextToSize(`• ${text}`, pageWidth);
        doc.text(splitText, margin + 2, yPos);
        yPos += (splitText.length * lineHeight) + 1;
    };

    // --- Content Generation ---

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Saurabh Jaiswal", 105, yPos, { align: "center" });
    yPos += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(darkGray);
    doc.text("+91-7420037100 | saurabhjaiswal459@gmail.com | portfolio", 105, yPos, { align: "center" });
    yPos += 8;

    // PROFILE
    addSectionTitle("Profile");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("2D Animator, Motion Graphic Artist, Storyboard Artist, Graphic designer", margin, yPos);
    yPos += lineHeight;
    
    doc.setFont("helvetica", "normal");
    const profileText = "I am a Creative professional artist and animator specializing in animation, visual storytelling, and design. Focus on entertainment, eLearning, and advertising. Blend of technical skills with artistic vision to deliver impactful and meaningful work.";
    const splitProfile = doc.splitTextToSize(profileText, pageWidth);
    doc.text(splitProfile, margin, yPos);
    yPos += (splitProfile.length * lineHeight) + 4;

    // EDUCATION
    addSectionTitle("Education");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Yashwantrao Chavan Maharashtra Open University", margin, yPos);
    doc.setFont("helvetica", "italic");
    doc.text("Pune, India", 210 - margin, yPos, { align: "right" });
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.text("B.Sc. Media, Graphics & Animation", margin, yPos);
    yPos += lineHeight + 4;

    // SKILLS
    addSectionTitle("Skills");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    
    const skills = [
      { label: "Animation & Motion Graphics", val: "2D Animation, Motion Graphics, 2D Character Animation" },
      { label: "Visual Design", val: "Storyboarding, Animatics, Graphic Design, Digital Painting, Sketching" },
      { label: "Media Production", val: "Video Editing, Audio Editing" },
      { label: "3D Design", val: "3D Modeling and Animation (Blender)" },
      { label: "Tools", val: "Screenwriting, Gen AI tools" }
    ];
    
    skills.forEach(s => {
        const prefix = `${s.label}: `;
        doc.setFont("helvetica", "bold");
        doc.text(prefix, margin, yPos);
        const labelWidth = doc.getTextWidth(prefix);
        
        doc.setFont("helvetica", "normal");
        // Handle multiline for skills if needed
        const valSplit = doc.splitTextToSize(s.val, pageWidth - labelWidth);
        doc.text(valSplit, margin + labelWidth, yPos);
        yPos += (valSplit.length * lineHeight); 
    });
    
    yPos += 2;
    doc.setFont("helvetica", "bold");
    doc.text("Software Proficiency:", margin, yPos);
    yPos += lineHeight;
    
    const softSkills = [
      "Adobe Suite: Photoshop, Illustrator, Animate CC, After Effects, Premiere Pro",
      "2D Animation: Moho Pro, TV Paint",
      "3D Design & Animation: Blender"
    ];
    doc.setFont("helvetica", "normal");
    softSkills.forEach(s => {
      doc.text(s, margin, yPos);
      yPos += lineHeight;
    });
    yPos += 4;

    // EXPERIENCE
    addSectionTitle("Experience");
    
    addRole("Video content creator", "Codegrads", "2025 April – Present");
    addBullet("Developing engaging educational videos tailored for both students and working professionals.");
    addBullet("Utilizing video editing, motion graphics, and graphic design to deliver impactful visual content.");
    addBullet("Collaborating with instructors to create educational videos.");
    addBullet("Overseeing and managing the entire media department.");
    yPos += 3;
    
    addRole("Motion Graphic Artist, Visualizer", "Byline Learning Solution", "2023 – 2025");
    addBullet("Creating educational animation videos (Grades 1–12)");
    addBullet("Animation, motion graphics, visual design for learning content");
    addBullet("Collaborating with instructional designer to create educational videos");
    yPos += 3;
    
    addRole("Storyboarder and 2D Animator", "Freelance", "2021 – 2023");
    addBullet("2D animations and animatics for entertainment");
    addBullet("Collaborated with clients for conceptual and visual storytelling solutions");
    yPos += 4;

    // ACHIEVEMENTS
    addSectionTitle("Achievements");
    addBullet("Employee of the Month – Recognized for outstanding performance and dedication.");

    // Save
    doc.save("Saurabh_Jaiswal_Resume.pdf");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-midnight/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="cursor-pointer group relative z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00f2ea" />
                <stop offset="1" stopColor="#ccff00" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="80" height="80" rx="20" stroke="url(#logoGradient)" strokeWidth="6" className="opacity-80 group-hover:opacity-100 transition-opacity" />
            <path d="M45 35H35C32.2386 35 30 37.2386 30 40V42C30 44.7614 32.2386 47 35 47H55C57.7614 47 60 49.2386 60 52V58C60 60.7614 57.7614 63 55 63H40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M70 35V60C70 61.6569 68.6569 63 67 63H63" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors uppercase tracking-widest relative group ${
                activeSection === link.name ? 'text-cyan' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full ${activeSection === link.name ? 'w-full' : ''}`}></span>
            </a>
          ))}
          <a
            href="#"
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-5 py-2 bg-white text-midnight font-bold text-sm rounded-full hover:bg-cyan hover:text-midnight transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(0,242,234,0.6)]"
          >
            <Download size={16} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-cyan transition-colors relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full min-h-screen bg-midnight/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`text-2xl font-medium uppercase tracking-widest ${
              activeSection === link.name ? 'text-cyan' : 'text-white hover:text-cyan'
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#"
          onClick={(e) => {
            handleDownloadResume(e);
            setIsMenuOpen(false);
          }}
          className="flex items-center gap-2 px-8 py-4 bg-cyan text-midnight font-bold rounded-full mt-4"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;