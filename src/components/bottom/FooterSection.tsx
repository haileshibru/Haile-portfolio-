import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Terminal, 
  MapPin, 
  Cpu, 
  Heart,
  ExternalLink
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: '01. About', href: '#about' },
    { label: '02. Experience', href: '#experience' },
    { label: '03. Competencies', href: '#competencies' },
    { label: '04. Projects', href: '#projects' },
    { label: '05. Telemetry', href: '#experience' },
    { label: '06. Contact', href: '#contact' },
  ];

  const quickProjects = [
    { name: 'EduTrack Pro', url: 'https://edutrack-pro.vercel.app' },
    { name: 'Digital Ceremony', url: 'https://digital-ceremony.vercel.app' },
    { name: 'Bus Transport System', url: 'https://bus-transport-management-system.vercel.app' },
    { name: 'Professional Hub', url: 'https://professional-hub-two.vercel.app' },
    { name: 'Digital Signboard', url: 'https://digital-signboard-psi.vercel.app' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff5500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center font-mono font-black text-[#ff5500] text-sm shadow-sm">
                HS
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">
                  HAILE SHIBRU
                </h3>
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  IT Instructor &amp; Network Systems Specialist
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-sm">
              Computer Science graduate from Debre Tabor University (2025). Dedicated to hands-on IT education, enterprise network infrastructure, and scalable cloud application development in Addis Ababa, Ethiopia.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Addis Ababa, ET</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400">Online &amp; Active</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Fast Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs font-mono text-zinc-400 hover:text-[#ff5500] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-zinc-600 group-hover:text-[#ff5500] transition-colors">&gt;</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Live Deployments (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Featured Live Deployments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickProjects.map((p, idx) => (
                <a
                  key={idx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0d0d0f] hover:bg-zinc-800 border border-white/5 hover:border-[#ff5500]/40 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="truncate">{p.name}</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-[#ff5500] transition-colors shrink-0 ml-1" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://github.com/haile199105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#ff5500] hover:underline flex items-center gap-1"
              >
                <span>View all repositories on GitHub</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Haile Shibru. All technical rights reserved.</span>
          </div>

          {/* Social Badges & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/haile-shibru-763418327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-[#ff5500]/50 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/haile199105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-[#ff5500]/50 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="mailto:haileyesusshibru19@gmail.com"
              aria-label="Send Email"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-[#ff5500]/50 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="tel:+251933615101"
              aria-label="Call Haile"
              className="p-2 rounded-lg bg-zinc-900 border border-white/5 hover:border-[#ff5500]/50 text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="ml-2 px-3 py-2 rounded-xl bg-[#ff5500]/10 hover:bg-[#ff5500] text-[#ff5500] hover:text-white border border-[#ff5500]/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span className="text-[10px] uppercase font-bold">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
