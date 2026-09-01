import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Download, 
  ExternalLink, 
  Clock, 
  Sparkles,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
  Radio
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [addisTime, setAddisTime] = useState('');
  
  // Interactive Inquiry Form State
  const [inquiryType, setInquiryType] = useState('IT Training & Instruction');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // Live Addis Ababa Time (EAT - UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setAddisTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('haileyesusshibru19@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('+251933615101');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderMessage.trim()) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry - ${inquiryType}] from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Haile,\n\n` +
      `Name: ${senderName || 'Not specified'}\n` +
      `Email: ${senderEmail || 'Not specified'}\n` +
      `Inquiry Category: ${inquiryType}\n\n` +
      `Message:\n${senderMessage}\n\n` +
      `Sent via haile-shibru.vercel.app`
    );

    window.location.href = `mailto:haileyesusshibru19@gmail.com?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 6000);
  };

  const inquiryTypes = [
    'IT Training & Instruction',
    'Full-Stack Web App',
    'Network Lab / Infrastructure',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#080808]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff5500]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#ff7733]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-4 md:p-5 rounded-2xl bg-[#0d0d0f] border border-emerald-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <span className="text-white text-xs md:text-sm font-bold tracking-tight">
                Current Status: Available for Technical Roles &amp; Project Collaborations
              </span>
              <p className="text-[11px] font-mono text-zinc-400">
                Open to IT Instructor appointments, Network Systems engineering, and web development opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Addis Ababa: <strong className="text-white">{addisTime || 'EAT (GMT+3)'}</strong></span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 28 }}
                  viewport={{ once: true }}
                  className="h-[2px] bg-[#ff5500]" 
                />
                <span className="font-mono text-xs text-[#ff5500] font-bold uppercase tracking-[0.3em] block">
                  06. DIRECT CONNECT
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Reliable Systems</span> Together<span className="text-[#ff5500]">.</span>
              </h2>

              <p className="mt-4 text-zinc-400 text-base leading-relaxed font-light">
                Whether you're looking for an experienced IT Instructor to empower your students, a Network Specialist for infrastructure, or a Developer to deliver full-stack web applications, I'm ready to collaborate.
              </p>
            </div>

            {/* Quick Contact Interactive Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 hover:border-[#ff5500]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Official Email
                    </div>
                    <a 
                      href="mailto:haileyesusshibru19@gmail.com" 
                      className="text-white font-bold text-sm sm:text-base hover:text-[#ff5500] transition-colors break-all"
                    >
                      haileyesusshibru19@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono border border-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:haileyesusshibru19@gmail.com"
                    className="p-2 rounded-lg bg-[#ff5500]/10 hover:bg-[#ff5500] text-[#ff5500] hover:text-white transition-colors"
                    title="Open mail client"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone / Call Card */}
              <div className="p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Phone &amp; WhatsApp
                    </div>
                    <a 
                      href="tel:+251933615101" 
                      className="text-white font-bold text-sm sm:text-base hover:text-emerald-400 transition-colors"
                    >
                      +251 933 615 101
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-mono border border-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href="tel:+251933615101"
                    className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white transition-colors"
                    title="Call directly"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location & Time Zone Card */}
              <div className="p-5 rounded-2xl bg-[#0d0d0f] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Location &amp; Base
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-zinc-400">
                  <div className="text-zinc-500 text-[10px]">TIMEZONE</div>
                  <div className="text-white font-bold">EAT (UTC+3)</div>
                </div>
              </div>
            </div>

            {/* Social & Professional Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/haile-shibru-763418327"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0d0d0f] hover:bg-zinc-800/80 border border-white/10 hover:border-[#ff5500]/50 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">LinkedIn</div>
                  <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    Connect Profile <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/haile199105"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0d0d0f] hover:bg-zinc-800/80 border border-white/10 hover:border-[#ff5500]/50 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">GitHub</div>
                  <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                    Repositories <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Terminal Form */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#0d0d0f] border border-white/10 p-6 md:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-zinc-400 ml-2 font-mono text-[11px]">inquiry-dispatch.sh</span>
                </div>
                <span className="text-[#ff5500] text-[10px] uppercase tracking-wider font-bold">
                  Direct Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmitMessage} className="space-y-5">
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                    1. Select Inquiry Purpose
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => {
                      const isSelected = inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#ff5500] text-white font-bold border border-[#ff5500] shadow-md shadow-[#ff5500]/20'
                              : 'bg-zinc-950/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5'
                          }`}
                        >
                          <span className="truncate">{type}</span>
                          {isSelected && <Check className="w-3 h-3 shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sender Name & Email Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Name / Org
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. John Doe / Tech College"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-[#ff5500] focus:outline-none text-white text-xs font-mono placeholder:text-zinc-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-[#ff5500] focus:outline-none text-white text-xs font-mono placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Describe your class syllabus, project scope, network requirement, or question..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-white/10 focus:border-[#ff5500] focus:outline-none text-white text-xs font-sans placeholder:text-zinc-600 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 px-6 py-3.5 rounded-xl bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5500]/30 cursor-pointer group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message to Haile</span>
                  </button>

                  <a
                    href="https://drive.google.com/file/d/1nVvOSccMhEoKfG2mo2Mv05WKQmQ4Z18X/view?usp=drivesdk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#ff5500]" />
                    <span>CV / Resume</span>
                  </a>
                </div>

                {formSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Opening your mail client with formatted message for Haile Shibru!</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
