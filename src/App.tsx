/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  BookOpen, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Cpu, 
  Code2, 
  Smartphone, 
  Wrench, 
  Database, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Layers,
  FileText,
  Download
} from 'lucide-react';

// --- Types ---

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Competency {
  title: string;
  icon: React.ReactNode;
  tags: string[];
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags?: string[];
}

// --- Data ---

const EXPERIENCE: ExperienceItem[] = [
  {
    title: "IT Instructor",
    company: "Debub Ethiopia College",
    period: "Present",
    description: [
      "Deliver networking and programming courses to degree and diploma students",
      "Guide practical lab sessions for hands-on technical skill development",
      "Prepare comprehensive technical training materials and assessments"
    ]
  },
  {
    title: "IT Intern",
    company: "Koye Feche Sub-city Science & Technology Bureau",
    period: "6 Months",
    description: [
      "Configured routers and switches for local network infrastructure",
      "Implemented firewall setups to ensure network security",
      "Provided server and database support for bureau operations",
      "Resolved complex technical troubleshooting issues"
    ]
  },
  {
    title: "GPS Technician",
    company: "Technical Fleet Solutions",
    period: "6+ Months",
    description: [
      "Installed vehicle tracking systems in diverse fleet environments",
      "Diagnosed connectivity and hardware issues in the field",
      "Managed installation data using Excel and Google Sheets for reporting"
    ]
  }
];

const COMPETENCIES: Competency[] = [
  {
    title: "Networking & Infrastructure",
    icon: <Network className="w-6 h-6 text-electric-blue" />,
    tags: ["Cisco", "Routing", "Switching", "Firewalls", "TCP/IP"]
  },
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-electric-blue" />,
    tags: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-electric-blue" />,
    tags: ["Flutter", "Firebase", "Dart", "UI/UX"]
  },
  {
    title: "IT Support & Troubleshooting",
    icon: <Wrench className="w-6 h-6 text-electric-blue" />,
    tags: ["Hardware", "OS Support", "Diagnostics", "Maintenance"]
  },
  {
    title: "Field Technical Installation",
    icon: <MapPin className="w-6 h-6 text-electric-blue" />,
    tags: ["GPS Systems", "Hardware Integration", "Field Ops"]
  },
  {
    title: "Data Handling",
    icon: <Database className="w-6 h-6 text-electric-blue" />,
    tags: ["Excel", "Google Sheets", "Data Analysis", "Reporting"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "Professional Hub – Career & Platform",
    category: "Service Platform",
    description: "Bilingual (English & Amharic) platform offering 8 professional services including CV writing, LinkedIn optimization, tutoring, and AI proficiency coaching.",
    image: "https://i.postimg.cc/QHy0MfPs/Screenshot-2.png",
    link: "https://professional-hub-two.vercel.app/",
    github: "https://github.com/haile199105/Professional-Hub",
    tags: ["React", "TypeScript", "Vercel"]
  },
  {
    title: "Network Configuration Lab Setup",
    category: "Infrastructure",
    description: "Designed and implemented a scalable network lab environment for student training, featuring VLANs and secure routing.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    tags: ["Cisco", "VLANs", "Routing"]
  },
  {
    title: "Flutter-Based Mobile Application",
    category: "Mobile Dev",
    description: "Developed a cross-platform mobile solution integrated with Firebase for real-time data synchronization.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
    tags: ["Flutter", "Firebase", "Dart"]
  },
  {
    title: "GPS Installation & Tracking Workflow",
    category: "Field Tech",
    description: "Streamlined the installation and tracking process for vehicle GPS units, improving data accuracy by 40%.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800&auto=format&fit=crop",
    tags: ["GPS Hardware", "Field Ops", "Excel"]
  }
];

const TECH_STACK = [
  { name: "Cisco IOS", category: "IT" },
  { name: "Python", category: "Dev" },
  { name: "React", category: "Dev" },
  { name: "Firebase", category: "Dev" },
  { name: "Linux", category: "IT" },
  { name: "Flutter", category: "Dev" },
  { name: "Wireshark", category: "IT" },
  { name: "Docker", category: "IT/Dev" },
  { name: "TypeScript", category: "Dev" },
  { name: "SQL", category: "Dev" },
];

// --- Components ---

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-2 group cursor-pointer"
  >
    <div className="relative">
      <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-electric-blue/20 group-hover:rotate-12 transition-transform duration-300">
        H
      </div>
      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-lg flex items-center justify-center text-charcoal font-black text-[10px] border-2 border-charcoal">
        S
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-white font-black tracking-tighter text-xl">SHIBRU</span>
      <span className="text-electric-blue font-mono text-[10px] tracking-[0.2em] uppercase">Systems</span>
    </div>
  </motion.div>
);

const TechMarquee = () => (
  <div className="py-12 border-y border-white/5 bg-zinc-900/40 overflow-hidden relative">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-2xl font-black text-white/20 hover:text-electric-blue transition-colors cursor-default">
            {tech.name}
          </span>
          <span className="text-[10px] font-mono text-zinc-600 border border-white/10 px-2 py-0.5 rounded uppercase">
            {tech.category}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = '> system.init()\n> loading_modules...\n> network_status: optimal\n> instructor_mode: active\n> developer_mode: enabled\n> welcome_haile_shibru';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="terminal-window rounded-xl overflow-hidden font-mono text-sm p-4 scanline relative"
    >
      <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="code-text whitespace-pre-wrap min-h-[120px]">
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    {subtitle && (
      <div className="flex items-center gap-2 mb-2">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          className="h-[1px] bg-electric-blue" 
        />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-electric-blue block">
          {subtitle}
        </span>
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
      {children}
    </h2>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-charcoal selection:bg-electric-blue/30 selection:text-white relative">
      {/* Tech Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm font-mono text-zinc-500">
              <a href="#experience" className="hover:text-electric-blue transition-colors">01. EXP</a>
              <a href="#competencies" className="hover:text-electric-blue transition-colors">02. SKILLS</a>
              <a href="#projects" className="hover:text-electric-blue transition-colors">03. WORK</a>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={scrollToContact}
              className="px-6 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/30 hover:bg-electric-blue hover:text-white transition-all duration-300 text-sm font-bold text-electric-blue"
            >
              Connect
            </motion.button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" 
            />
            {/* Background Tech Image Overlay */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
                   alt="Tech Background" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 flex items-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-electric-blue/50 flex items-center justify-center p-1 overflow-hidden relative shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <img 
                      src="https://i.postimg.cc/VL9NWQNY/image-3.jpg" 
                      alt="Haile Shibru" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-electric-blue font-mono text-xs tracking-[0.5em] uppercase mb-2">Systems Professional</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase whitespace-nowrap">Haile Shibru</h2>
                  </div>
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Reliable</span> Networks<span className="text-electric-blue">.</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
                  I bridge the gap between <span className="text-white font-medium">IT Infrastructure</span> and <span className="text-white font-medium">Modern Development</span>. Teaching practical tech while building dependable systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-electric-blue hover:bg-blue-600 text-white rounded-xl font-bold transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-electric-blue/20"
                  >
                    Initialize Connection
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/1nVvOSccMhEoKfG2mo2Mv05WKQmQ4Z18X/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all duration-300 border border-white/10 flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5 text-electric-blue" />
                    Download CV
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#experience"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-zinc-400 rounded-xl font-bold transition-all duration-300 border border-white/10 flex items-center gap-2"
                  >
                    <Layers className="w-5 h-5" />
                    Stack.log
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block"
              >
                <Terminal />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-32 border-y border-white/5 bg-zinc-900/20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <SectionTitle subtitle="00. IDENTITY">IT Instructor & Developer</SectionTitle>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 relative z-10"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border-2 border-electric-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden relative group">
                    <img 
                      src="https://i.postimg.cc/VL9NWQNY/image-3.jpg" 
                      alt="Haile Shibru" 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-white text-center px-4">Professional Identity Verified</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.02, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute -top-10 -left-10 text-[10rem] font-black text-white pointer-events-none"
                >
                  BIO
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg text-zinc-400 leading-relaxed space-y-6 font-light"
              >
                <p>
                  As a <span className="text-white font-medium">Computer Science graduate</span>, I have dedicated my career to bridging the gap between theoretical knowledge and practical application. Currently serving as an IT Instructor, I guide degree and diploma students through the complexities of modern computing.
                </p>
                <p>
                  My background spans <span className="text-electric-blue font-medium">networking and system configuration</span>, field technical installations, and software troubleshooting. Whether I'm configuring a secure enterprise network or installing GPS tracking systems in the field, my focus remains on reliability and efficiency.
                </p>
                <div className="pt-4 flex gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                  >
                    <span className="text-white font-bold text-2xl">Addis Ababa</span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Location</span>
                  </motion.div>
                  <div className="w-px h-10 bg-white/10 mx-4" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col"
                  >
                    <span className="text-white font-bold text-xl leading-tight">Debre Tabor University</span>
                    <span className="text-sm font-light text-zinc-400 block">CS Graduate - Class of 2025</span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">Education</span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="pt-8"
                >
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="https://drive.google.com/file/d/1nVvOSccMhEoKfG2mo2Mv05WKQmQ4Z18X/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-electric-blue font-mono text-sm uppercase tracking-widest border-b border-electric-blue/30 pb-1 hover:border-electric-blue transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Preview Professional CV
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <TechMarquee />

        {/* Experience Section */}
        <section id="experience" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="01. CAREER">Professional Experience</SectionTitle>
            
            <div className="relative mt-16 max-w-4xl mx-auto">
              {/* Timeline Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute left-0 top-0 w-px timeline-line" 
              />
              
              <div className="space-y-16">
                {EXPERIENCE.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-charcoal border-2 border-electric-blue z-10" 
                    />
                    
                    <motion.div 
                      whileHover={{ x: 10 }}
                      className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 glow-hover group"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors">{item.title}</h3>
                          <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">{item.company}</p>
                        </div>
                        <span className="px-4 py-1 rounded-full bg-electric-blue/10 text-electric-blue text-xs font-mono border border-electric-blue/20">
                          {item.period}
                        </span>
                      </div>
                      <ul className="space-y-4">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/40 mt-2 shrink-0" />
                            <span className="text-sm leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competencies Section */}
        <section id="competencies" className="py-32 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="02. STACK">Core Competencies</SectionTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPETENCIES.map((comp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 glow-hover group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                    {React.cloneElement(comp.icon as React.ReactElement, { className: "w-24 h-24" })}
                  </div>
                  <div className="mb-6 p-3 rounded-xl bg-electric-blue/10 w-fit group-hover:bg-electric-blue/20 transition-colors relative z-10">
                    {comp.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">{comp.title}</h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {comp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-mono text-zinc-500 border border-white/5 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="03. OUTPUT">Featured Projects</SectionTitle>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                    <a 
                      href={project.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-electric-blue hover:text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-electric-blue/5 border border-electric-blue/20 text-[9px] font-mono text-electric-blue uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <a 
                      href={project.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-electric-blue opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                    >
                      {project.link ? 'Live Demo' : 'View Project'} <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-24 border-y border-white/5 bg-zinc-900/40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { val: "100+", label: "Students Taught" },
                { val: "50+", label: "GPS Units Installed" },
                { val: "3+", label: "Projects Deployed" }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-7xl font-black text-white mb-2 tracking-tighter">{metric.val}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-electric-blue">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-xs text-electric-blue uppercase tracking-[0.5em] mb-6 block">READY TO CONNECT</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.85]">
                  Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Reliable</span> Systems Together<span className="text-electric-blue">.</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mt-16">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:haileyesusshibru19@gmail.com"
                    className="flex items-center gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-electric-blue/50 transition-all group"
                  >
                    <div className="p-4 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                      <Mail className="w-8 h-8 text-electric-blue" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Email.protocol</div>
                      <div className="font-bold text-lg break-all">haileyesusshibru19@gmail.com</div>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+251933615101"
                    className="flex items-center gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-electric-blue/50 transition-all group"
                  >
                    <div className="p-4 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                      <Phone className="w-8 h-8 text-electric-blue" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Phone.dial</div>
                      <div className="font-bold text-lg">+251 933 615 101</div>
                    </div>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.linkedin.com/in/haile-shibru-763418327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-electric-blue/50 transition-all group"
                  >
                    <div className="p-4 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                      <Linkedin className="w-8 h-8 text-electric-blue" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Social.link</div>
                      <div className="font-bold text-lg">LinkedIn Profile</div>
                    </div>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/haile199105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-electric-blue/50 transition-all group"
                  >
                    <div className="p-4 rounded-xl bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                      <Github className="w-8 h-8 text-electric-blue" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Code.repo</div>
                      <div className="font-bold text-lg">GitHub Profile</div>
                    </div>
                  </motion.a>
                </div>

                <div className="flex justify-center gap-8 mt-16">
                  {[
                    { icon: <Linkedin />, url: "https://www.linkedin.com/in/haile-shibru-763418327", label: "LinkedIn" },
                    { icon: <Github />, url: "https://github.com/haile199105", label: "GitHub" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ y: -5 }}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all group"
                    >
                      <div className="p-3 rounded-full border border-white/5 group-hover:border-electric-blue/50 group-hover:text-electric-blue transition-all">
                        {social.icon}
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Haile Shibru // System Version 2.0.0
          </div>
          <div className="flex gap-8 text-[10px] text-zinc-600 font-mono uppercase tracking-[0.3em]">
            <span>Addis Ababa, ET</span>
            <span>Network Specialist</span>
            <span>Developer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
