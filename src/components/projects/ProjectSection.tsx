import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ArrowRight, 
  Layers, 
  Filter, 
  Sparkles,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { ProjectData, ProjectFilterCategory } from '../../types/project';
import { PROJECTS, FILTER_OPTIONS } from '../../data/projects';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  // Dynamic filter calculation
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.categoryGroup === selectedFilter);
  }, [selectedFilter]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.featured);
  }, [filteredProjects]);

  const standardProjects = useMemo(() => {
    return filteredProjects.filter((p) => !p.featured);
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5500]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                className="h-[2px] bg-[#ff5500]" 
              />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5500] font-bold block">
                04. OUTPUT &amp; DEPLOYMENTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected Work<span className="text-[#ff5500]">.</span>
            </h2>
            <p className="mt-3 text-zinc-400 max-w-xl text-base font-light">
              Real-world systems, educational platforms, and digital applications engineered, deployed, and actively maintained.
            </p>
          </div>

          {/* Dynamic Project Counter Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d0d0f] border border-white/10 backdrop-blur-md self-start md:self-auto"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500] font-mono font-black text-xl">
              {PROJECTS.length}+
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm tracking-tight">
                {PROJECTS.length}+ Projects Built &amp; Deployed
              </div>
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Vercel &amp; GitHub Connected
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/5">
          <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs uppercase tracking-wider mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>

          {FILTER_OPTIONS.map((tab) => {
            const isActive = selectedFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#ff5500] text-white font-bold shadow-lg shadow-[#ff5500]/25'
                    : 'bg-[#0d0d0f] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{tab.label}</span>
                {tab.value === 'all' && (
                  <span className={`px-1.5 py-0.2 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-500'}`}>
                    {PROJECTS.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-16">
          {/* Featured Projects Highlight (EduTrack Pro & Digital Ceremony) */}
          {featuredProjects.length > 0 && (
            <div className="space-y-8">
              {selectedFilter === 'all' && (
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Featured Production Systems</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-10">
                {featuredProjects.map((project, idx) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onOpenModal={(p) => setActiveModalProject(p)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other / Standard Projects Grid */}
          {standardProjects.length > 0 && (
            <div className="space-y-6">
              {selectedFilter === 'all' && (
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 pt-6">
                  <Layers className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Deployed Applications &amp; Utilities</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {standardProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onOpenModal={(p) => setActiveModalProject(p)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="p-12 rounded-2xl bg-zinc-900/40 border border-white/5 text-center space-y-4">
              <p className="text-zinc-400 font-mono text-sm">No projects found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className="px-4 py-2 rounded-xl bg-[#ff5500] text-white text-xs font-mono font-bold"
              >
                Reset Filter to All
              </button>
            </div>
          )}
        </div>

        {/* View All Work CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#0d0d0f] via-[#0d0d0f] to-[#080808] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white tracking-tight">
              Looking for more repositories, lab exercises, and open code?
            </h4>
            <p className="text-xs text-zinc-400 font-mono">
              Explore my complete commit history, network configurations, and utility repositories.
            </p>
          </div>

          <a
            href="https://github.com/haile199105"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ff5500]/50 text-white font-mono text-xs font-bold transition-all flex items-center gap-2 group shrink-0 shadow-lg"
          >
            <Github className="w-4 h-4 text-[#ff5500] group-hover:rotate-12 transition-transform" />
            <span>See more of my work on GitHub</span>
            <ArrowRight className="w-4 h-4 text-[#ff5500] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Project Case Study Details Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
