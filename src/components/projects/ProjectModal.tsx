import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Code2, 
  UserCheck, 
  Calendar,
  Layers
} from 'lucide-react';
import { ProjectData } from '../../types/project';

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-950/80 sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Case Study // {project.category}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8">
              {/* Title & Status */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full bg-[#ff5500]/10 text-[#ff5500] text-xs font-mono border border-[#ff5500]/20">
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {project.releaseYear}
                  </span>
                </div>
                <h2 id="modal-project-title" className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-3 text-base text-zinc-300 leading-relaxed font-light">
                  {project.longDescription}
                </p>
              </div>

              {/* Large Project Image Preview */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 relative aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-950/10 border border-red-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    The Challenge / Problem
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    Engineered Solution
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff5500]" />
                  Key System Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#ff5500]" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-white/10 text-xs font-mono text-white flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role & Built by info */}
              <div className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-zinc-950 border border-white/5 text-xs font-mono text-zinc-400 gap-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#ff5500]" />
                  <span>Role: <strong className="text-white">{project.role}</strong></span>
                </div>
                <div>
                  Architected &amp; Built by <strong className="text-white">{project.builtBy}</strong>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA Actions */}
            <div className="px-6 py-4 bg-zinc-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              >
                Close Case Study
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold border border-white/10 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-[#ff5500]" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#ff5500]/30"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
