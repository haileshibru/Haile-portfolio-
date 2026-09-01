import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { ProjectData } from '../../types/project';
import { ProjectImagePreview } from './ProjectImagePreview';

interface FeaturedProjectCardProps {
  project: ProjectData;
  index: number;
  onOpenModal: (project: ProjectData) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  index,
  onOpenModal
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-3xl bg-zinc-900/60 border border-white/10 p-6 md:p-8 glow-hover group overflow-hidden"
    >
      {/* Background Accent Ambient Glow */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 transition-opacity group-hover:opacity-30"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Visual Preview Left / Top */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Project
              </span>
              <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                // {project.releaseYear}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.status}</span>
            </div>
          </div>

          <ProjectImagePreview 
            project={project} 
            isFeatured={true}
            onOpenModal={() => onOpenModal(project)}
          />
        </div>

        {/* Content Right / Details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              {project.category}
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#ff5500] transition-colors leading-tight">
              {project.title}
            </h3>

            <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-light">
              {project.description}
            </p>

            {/* Key Features Highlights */}
            <div className="mt-5 space-y-2 border-y border-white/5 py-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Key Capabilities:</div>
              {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5500] mt-0.5 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Technologies Badges */}
            <div className="mt-5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 hover:border-[#ff5500]/40 hover:text-[#ff5500] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons & Ownership */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] px-5 py-3 rounded-xl bg-[#ff5500] hover:bg-[#e04a00] text-white text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5500]/20 group/btn cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group/git"
              >
                <Github className="w-4 h-4 text-[#ff5500] group-hover/git:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-sm font-mono transition-all flex items-center justify-center gap-1.5 border border-white/5 hover:border-white/20 cursor-pointer"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{project.role}</span>
              </span>
              <span>Built by {project.builtBy}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
