import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  Terminal
} from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  const metrics = [
    {
      val: "100+",
      label: "Students Mentored",
      category: "ACADEMIC IMPACT",
      desc: "Delivered hands-on networking, programming, and IT systems curriculum at Debub Ethiopia College.",
      icon: <Users className="w-6 h-6 text-[#ff5500]" />,
      accent: "from-[#ff5500]/20 to-[#ff5500]/5",
      border: "border-[#ff5500]/30",
      indicator: "bg-[#ff5500]"
    },
    {
      val: "50+",
      label: "GPS Telematics Units",
      category: "FIELD HARDWARE",
      desc: "Installed, configured, and verified vehicle tracking hardware and fleet management systems at Sol-Tech.",
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      accent: "from-amber-500/20 to-amber-600/5",
      border: "border-amber-500/25",
      indicator: "bg-amber-400"
    },
    {
      val: "6+",
      label: "Production Deployments",
      category: "CLOUD APPLICATIONS",
      desc: "Architected, engineered, and shipped full-stack platforms with Firebase, Supabase, and Vercel.",
      icon: <Globe2 className="w-6 h-6 text-purple-400" />,
      accent: "from-purple-500/20 to-purple-600/5",
      border: "border-purple-500/25",
      indicator: "bg-purple-400"
    },
    {
      val: "100%",
      label: "Practical Delivery",
      category: "RELIABILITY FOCUS",
      desc: "Dedicated to zero-downtime network lab environments, structured assessments, and scalable solutions.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      accent: "from-emerald-500/20 to-emerald-600/5",
      border: "border-emerald-500/25",
      indicator: "bg-emerald-400"
    }
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-[#0a0a0c] relative overflow-hidden">
      {/* Dynamic Background Glow & Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ff5500]/5 rounded-full blur-[140px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 40px)', backgroundSize: '20px 20px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Telemetry Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-[0.25em]">
              05. PROVEN TRACK RECORD &amp; FIELD METRICS
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-[#ff5500]" />
            <span>Telemetry: All Systems Verified</span>
          </div>
        </div>

        {/* 4-Card Bento Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl bg-gradient-to-b ${metric.accent} to-[#0d0d0f] p-6 border ${metric.border} backdrop-blur-sm group overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle light streak */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 px-2 py-0.5 rounded bg-black/40 border border-white/5">
                    {metric.category}
                  </span>
                </div>

                <div className="text-5xl font-black text-white tracking-tight mb-2 flex items-baseline gap-1">
                  <span>{metric.val}</span>
                  <span className={`w-2 h-2 rounded-full ${metric.indicator} inline-block`} />
                </div>

                <h4 className="text-lg font-bold text-zinc-200 mb-2 tracking-tight group-hover:text-white transition-colors">
                  {metric.label}
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {metric.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-[#ff5500]" />
                  Live Verified
                </span>
                <span>0{i + 1} // 04</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
