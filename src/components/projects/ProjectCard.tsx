import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { ProjectData } from '../../types/project';
import { ProjectImagePreview } from './ProjectImagePreview';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onOpenModal: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenModal
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-5 md:p-6 glow-hover group overflow-hidden"
    >
      <div className="space-y-4">
        {/* Top Header info */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest truncate max-w-[170px]">
              {project.category.split('/')[0].trim()}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            {project.status.split('/')[0].trim()}
          </span>
        </div>

        {/* Visual Preview */}
        <ProjectImagePreview 
          project={project} 
          isFeatured={false}
          onOpenModal={() => onOpenModal(project)}
        />

        {/* Title and description */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#ff5500] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3 font-light">
            {project.description}
          </p>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-zinc-300 group-hover:border-[#ff5500]/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-6 mt-4 border-t border-white/5 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-lg bg-[#ff5500]/10 hover:bg-[#ff5500] hover:text-white border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm group/btn cursor-pointer"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all flex items-center justify-center gap-1.5 group/git"
          >
            <Github className="w-3.5 h-3.5 text-[#ff5500] group-hover/git:rotate-12 transition-transform" />
            <span>GitHub</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="w-full text-center py-1.5 text-[11px] font-mono text-zinc-400 hover:text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
        >
          <span>View System Case Study</span>
          <ArrowUpRight className="w-3 h-3 text-[#ff5500]" />
        </button>
      </div>
    </motion.article>
  );
};
