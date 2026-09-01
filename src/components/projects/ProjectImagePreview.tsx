import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { ProjectData } from '../../types/project';

interface ProjectImagePreviewProps {
  project: ProjectData;
  isFeatured?: boolean;
  onOpenModal?: () => void;
}

export const ProjectImagePreview: React.FC<ProjectImagePreviewProps> = ({
  project,
  isFeatured = false,
  onOpenModal
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 group ${
        isFeatured ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[16/10]'
      }`}
    >
      {/* Top Browser Mini Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-2 bg-charcoal/80 backdrop-blur-md border-b border-white/10 text-[10px] font-mono text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
        </div>
        <div className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[9px] truncate max-w-[220px]">
          {project.liveUrl.replace('https://', '')}
        </div>
        <div className="flex items-center gap-1 text-[#ff5500] text-[9px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE
        </div>
      </div>

      {/* Main Image with fallback */}
      {!hasError ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot and interface preview`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover pt-7 transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Fallback Graphic */
        <div className="w-full h-full pt-8 p-6 flex flex-col justify-between bg-gradient-to-br from-zinc-900 via-charcoal to-zinc-950">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff5500]/10 text-[#ff5500] text-xs font-mono border border-[#ff5500]/20">
              <Layers className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <h4 className="text-xl font-bold text-white tracking-tight">{project.shortTitle}</h4>
            <p className="text-xs text-zinc-400 line-clamp-2">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-zinc-400 border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Hover Action Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
        {onOpenModal && (
          <button
            onClick={onOpenModal}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-medium border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
            Case Study
          </button>
        )}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-[#ff5500]/30"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
