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
  Download,
  CheckCircle2,
  Sparkles,
  ChevronDown
} from 'lucide-react';

import { ProjectSection } from './components/projects/ProjectSection';
import { ImpactMetrics } from './components/bottom/ImpactMetrics';
import { ContactSection } from './components/bottom/ContactSection';
import { FooterSection } from './components/bottom/FooterSection';

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
  featured?: boolean;
}

// --- Data ---

const EXPERIENCE: ExperienceItem[] = [
  {
    title: "IT Instructor",
    company: "Debub Ethiopia College",
    period: "Present",
    description: [
      "Deliver networking, hardware, and programming curriculum to diploma and degree candidates",
      "Lead practical laboratory sessions for real-world switch/router configuration and cabling",
      "Design comprehensive technical evaluations, coursework, and assessment frameworks"
    ]
  },
  {
    title: "IT Intern",
    company: "Koye Feche Sub-city Science & Technology Bureau",
    period: "6 Months",
    description: [
      "Configured managed switches and Cisco routers for municipal departmental networks",
      "Implemented enterprise firewall rules and gateway security policies",
      "Administered local database systems and provided on-site workstation support",
      "Resolved mission-critical network bottlenecks and troubleshooting tickets"
    ]
  },
  {
    title: "GPS Technician",
    company: "Technical Fleet Solutions",
    period: "6+ Months",
    description: [
      "Installed and tested telematics and GPS tracking units across commercial fleet vehicles",
      "Diagnosed hardware failures, cellular antenna issues, and power harness connections",
      "Maintained structured inventory and telemetry diagnostic logs"
    ]
  }
];

const COMPETENCIES: Competency[] = [
  {
    title: "Networking & Infrastructure",
    icon: <Network className="w-6 h-6 text-[#ff5500]" />,
    tags: ["Cisco IOS", "Routing", "Switching", "Firewalls", "TCP/IP"],
    featured: true
  },
  {
    title: "Full-Stack Development",
    icon: <Code2 className="w-6 h-6 text-[#ff5500]" />,
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Express"]
  },
  {
    title: "Mobile & Cloud Apps",
    icon: <Smartphone className="w-6 h-6 text-[#ff5500]" />,
    tags: ["Flutter", "Firebase", "Supabase", "REST APIs"]
  },
  {
    title: "IT Systems & Lab Training",
    icon: <BookOpen className="w-6 h-6 text-[#ff5500]" />,
    tags: ["Curriculum", "Lab Practicals", "Linux", "Hardware"]
  },
  {
    title: "Telematics & Hardware",
    icon: <Cpu className="w-6 h-6 text-[#ff5500]" />,
    tags: ["GPS Telematics", "Fleet Hardware", "Diagnostics"]
  },
  {
    title: "Data & Systems Support",
    icon: <Database className="w-6 h-6 text-[#ff5500]" />,
    tags: ["Excel Analytics", "SQL", "Diagnostics", "Maintenance"]
  }
];

const SKILL_BARS = [
  { label: "Networking & Cisco Infrastructure", percentage: 95 },
  { label: "Full-Stack Web Development (React / TS)", percentage: 90 },
  { label: "IT Instruction & Practical Lab Training", percentage: 95 },
  { label: "GPS Telematics & Field Hardware", percentage: 88 },
  { label: "Database & Cloud Architecture (Firebase / SQL)", percentage: 85 }
];

const TECH_STACK = [
  { name: "Cisco IOS", category: "Network" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Firebase", category: "Cloud" },
  { name: "Supabase", category: "Database" },
  { name: "Linux / Ubuntu", category: "SysAdmin" },
  { name: "Flutter", category: "Mobile" },
  { name: "Tailwind CSS", category: "UI" },
  { name: "Docker", category: "DevOps" },
  { name: "Wireshark", category: "Security" },
  { name: "Node.js", category: "Backend" },
];

// --- Sub-components ---

const Logo = () => (
  <a href="#" className="flex items-center gap-2 group cursor-pointer">
    <div className="flex items-center font-black tracking-tight text-2xl">
      <span className="text-white">Haile</span>
      <span className="text-[#ff5500] group-hover:scale-125 transition-transform">.</span>
      <span className="text-zinc-500 font-normal text-sm ml-1 font-mono tracking-widest uppercase hidden sm:inline">Shibru</span>
    </div>
  </a>
);

const TechMarquee = () => (
  <div className="py-8 border-y border-white/5 bg-[#0d0d0f] overflow-hidden relative">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xl font-bold text-zinc-400 hover:text-[#ff5500] transition-colors cursor-default">
            {tech.name}
          </span>
          <span className="text-[10px] font-mono text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-2 py-0.5 rounded uppercase font-semibold">
            {tech.category}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-10">
    {subtitle && (
      <div className="flex items-center gap-2 mb-3">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 28 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[#ff5500]" 
        />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5500] font-bold block">
          {subtitle}
        </span>
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
      {children}
    </h2>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#ff5500]/30 selection:text-white relative font-sans">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ff5500]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[#ff5500]/3 rounded-full blur-[180px]" />
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-xl py-3.5 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
            <a href="#about" className="text-zinc-400 hover:text-[#ff5500] transition-colors font-medium">About</a>
            <a href="#services" className="text-zinc-400 hover:text-[#ff5500] transition-colors font-medium">Services</a>
            <a href="#experience" className="text-zinc-400 hover:text-[#ff5500] transition-colors font-medium">Experience</a>
            <a href="#projects" className="text-zinc-400 hover:text-[#ff5500] transition-colors font-medium">Portfolio</a>
            <a href="#contact" className="text-zinc-400 hover:text-[#ff5500] transition-colors font-medium">Contact</a>
          </nav>

          {/* Top Hire Me CTA */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-6 py-2.5 rounded-lg bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-bold font-mono tracking-wider uppercase transition-all shadow-lg shadow-[#ff5500]/25 cursor-pointer"
            >
              Hire Me!
            </motion.button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headline & Intro */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Orange "Hello, I am" pill badge */}
                <div className="inline-block">
                  <span className="px-4 py-1.5 rounded-md bg-[#ff5500] text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-[#ff5500]/30 inline-flex items-center gap-1.5">
                    <span>Hello, I am</span>
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9]">
                    Mr. Haile Shibru<span className="text-[#ff5500]">.</span>
                  </h1>
                  <p className="text-xl sm:text-2xl font-light text-zinc-300 leading-snug">
                    A Professional <span className="text-white font-semibold">IT Instructor</span>, <span className="text-white font-semibold">Network Specialist</span> &amp; <span className="text-[#ff5500] font-semibold">Full-Stack Developer</span>.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-light">
                  Bridging the gap between robust computer network infrastructure, classroom technical mentorship, and modern cloud web application delivery in Addis Ababa, Ethiopia.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <motion.a 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://drive.google.com/file/d/1nVvOSccMhEoKfG2mo2Mv05WKQmQ4Z18X/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 bg-[#ff5500] hover:bg-[#e04a00] text-white rounded-lg font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#ff5500]/25"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </motion.a>

                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={scrollToProjects}
                    className="px-7 py-3.5 bg-[#121214] hover:bg-zinc-800 text-white rounded-lg font-bold text-sm transition-all duration-200 border border-white/15 hover:border-[#ff5500]/50 flex items-center gap-2 cursor-pointer"
                  >
                    <span>My Work</span>
                    <ArrowRight className="w-4 h-4 text-[#ff5500]" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={scrollToContact}
                    className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white rounded-lg text-sm font-mono transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Connect</span>
                    <ChevronRight className="w-4 h-4 text-[#ff5500]" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Hero Visual with Futuristic Wireframe Geometry */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center relative"
              >
                <div className="relative w-full max-w-md flex items-center justify-center">
                  
                  {/* Geometric Polygons & Wireframe Lines Overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 400 450" fill="none">
                    <polygon 
                      points="200,30 380,180 320,390 80,390 20,180" 
                      stroke="rgba(255, 85, 0, 0.4)" 
                      strokeWidth="1.5" 
                      className="wireframe-poly"
                    />
                    <polygon 
                      points="200,60 350,220 200,410 50,220" 
                      stroke="rgba(255, 255, 255, 0.15)" 
                      strokeWidth="1" 
                    />
                    <line x1="20,180" y1="180" x2="380" y2="180" stroke="rgba(255, 85, 0, 0.2)" strokeWidth="1" />
                    <line x1="200,30" y1="30" x2="200" y2="410" stroke="rgba(255, 85, 0, 0.2)" strokeWidth="1" />
                    
                    {/* Accent Corner Dots */}
                    <circle cx="200" cy="30" r="3" fill="#ff5500" />
                    <circle cx="380" cy="180" r="3" fill="#ff5500" />
                    <circle cx="320" cy="390" r="3" fill="#ff5500" />
                    <circle cx="80" cy="390" r="3" fill="#ff5500" />
                    <circle cx="20" cy="180" r="3" fill="#ff5500" />
                  </svg>

                  {/* Main Portrait Frame */}
                  <div className="relative z-10 w-72 h-88 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-[#0d0d0f] border-2 border-white/10 shadow-2xl shadow-[#ff5500]/10 group">
                    <img 
                      src="https://i.postimg.cc/VL9NWQNY/image-3.jpg" 
                      alt="Haile Shibru" 
                      className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                    
                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#080808]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                      <div>
                        <div className="text-white font-bold text-xs uppercase tracking-wider">Haile Shibru</div>
                        <div className="text-[#ff5500] font-mono text-[10px]">CS Graduate • Class of 2025</div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Ambient Orange Glow behind Portrait */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff5500]/20 to-transparent rounded-3xl blur-2xl -z-10" />
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator at bottom of Hero */}
            <div className="flex justify-center mt-12">
              <a 
                href="#about" 
                aria-label="Scroll to about section"
                className="w-7 h-11 rounded-full border-2 border-white/20 hover:border-[#ff5500] flex items-start justify-center p-1.5 transition-colors group cursor-pointer"
              >
                <motion.div 
                  animate={{ y: [0, 14, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="w-1.5 h-2 rounded-full bg-[#ff5500]"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Tech Marquee */}
        <TechMarquee />

        {/* Section 01: About & Core Story (Deduplicated & Cleaned) */}
        <section id="about" className="py-28 bg-[#0a0a0c] border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Workstation visual + Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#121214] border border-white/10 p-3 shadow-2xl">
                  <div className="rounded-xl overflow-hidden aspect-4/3 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000" 
                      alt="Development & Lab Workstation"
                      className="w-full h-full object-cover grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-[#ff5500]/10 mix-blend-color" />
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 p-4 rounded-xl bg-[#080808] border-2 border-[#ff5500]/40 shadow-2xl flex items-center gap-4 z-20">
                    <div className="text-3xl sm:text-4xl font-black text-[#ff5500] font-mono leading-none">
                      06+
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 font-bold leading-tight">
                      Months<br /><span className="text-zinc-500 font-normal">Active Tech Teaching</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Narrative & Skill Progress Bars */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 space-y-6"
              >
                <SectionTitle subtitle="01. ABOUT MY BACKGROUND">
                  Practical Journey &amp; Technical Mastery<span className="text-[#ff5500]">.</span>
                </SectionTitle>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  Graduating with a Computer Science degree from <strong className="text-white font-semibold">Debre Tabor University (Class of 2025)</strong>, I specialize in the intersection of physical network infrastructure, enterprise troubleshooting, and high-impact digital systems.
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Currently at <strong className="text-zinc-200">Debub Ethiopia College</strong>, I design practical laboratory coursework, training the next generation of engineers in Cisco switch/router configuration, diagnostic cabling, and software engineering principles.
                </p>

                {/* Skill Progress Bars with Orange Fill */}
                <div className="space-y-4 pt-3">
                  {SKILL_BARS.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-200 font-semibold uppercase">{skill.label}</span>
                        <span className="text-[#ff5500] font-bold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#161618] overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#ff5500] to-[#ff7733] rounded-full shadow-sm shadow-[#ff5500]/50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 02: Services & Core Competencies */}
        <section id="services" className="py-28 bg-[#080808] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5500] font-bold">
                  02. SERVICES &amp; EXPERTISE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Core Technical Offerings<span className="text-[#ff5500]">.</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-3 font-light">
                Enterprise networks, classroom IT mentorship, and full-stack cloud systems engineered with high reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPETENCIES.map((comp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className={`p-7 rounded-2xl border transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${
                    comp.featured 
                      ? 'bg-[#0f0f12] border-[#ff5500]/50 shadow-xl shadow-[#ff5500]/10' 
                      : 'bg-[#0d0d0f] border-white/10 hover:border-[#ff5500]/40'
                  }`}
                >
                  {comp.featured && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#ff5500] text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                      Featured
                    </div>
                  )}

                  <div>
                    <div className="mb-5 p-3 rounded-xl bg-[#ff5500]/10 w-fit group-hover:bg-[#ff5500] group-hover:text-white transition-all duration-300">
                      {comp.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ff5500] transition-colors">
                      {comp.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-4">
                    {comp.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5 uppercase tracking-wider group-hover:border-[#ff5500]/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: Experience */}
        <section id="experience" className="py-28 bg-[#0a0a0c] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="03. CAREER MILESTONES">Professional Experience</SectionTitle>
            
            <div className="relative mt-12 max-w-4xl mx-auto">
              {/* Timeline Line in Flame Orange */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-[#ff5500] via-[#ff7733] to-transparent" 
              />
              
              <div className="space-y-12">
                {EXPERIENCE.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-10 sm:pl-12"
                  >
                    {/* Timeline Dot in Orange */}
                    <div className="absolute left-[-6px] top-2 w-[13px] h-[13px] rounded-full bg-[#080808] border-2 border-[#ff5500] shadow-[0_0_10px_#ff5500] z-10" />
                    
                    <div className="p-7 rounded-2xl bg-[#0d0d0f] border border-white/10 glow-hover group">
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors">{item.title}</h3>
                          <p className="text-zinc-400 font-mono text-xs uppercase tracking-wider mt-0.5">{item.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#ff5500]/10 text-[#ff5500] text-xs font-mono font-semibold border border-[#ff5500]/30">
                          {item.period}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5500] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Projects */}
        <ProjectSection />

        {/* Section 05: Impact Metrics */}
        <ImpactMetrics />

        {/* Section 06: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

