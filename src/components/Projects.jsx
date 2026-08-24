import React, { useState } from 'react';
import {
  Bot, Sparkles, ExternalLink, Globe, Layers, CheckCircle2,
  Users, ArrowUpRight, X, Newspaper, Navigation, Github,
  MapPin, Rss, Search, Cpu, Download, Smartphone
} from 'lucide-react';

// ─── Project Data ────────────────────────────────────────────────────────────
const PROJECTS = {
  brainnova: {
    id: 'brainnova',
    name: 'BrainNova AI',
    subtitle: 'AI-Powered Note-Taking Application with Conversational Assistant',
    category: 'Main Featured Project',
    categoryColor: 'cyan',
    description:
      'Built and deployed an intelligent note-taking web application featuring an integrated conversational AI assistant. Designed to boost productivity by automating text transformation and note curation.',
    features: [
      'AI-Powered Summarization',
      'Automated Grammar Correction',
      'Conversational Content Editing',
      'Intelligent Note Management',
    ],
    tech: ['React', 'AI Assistant', 'Python Logic', 'Vercel', 'Tailwind CSS'],
    liveUrl: 'https://note-mind-ai-six.vercel.app/',
    githubUrl: 'https://github.com/rajesh9474/',
    liveLabel: 'note-mind-ai-six.vercel.app',
    modalDetail:
      'BrainNova AI is Rajesh\'s flagship project. The application provides an intelligent canvas to write notes, query a conversational AI assistant, generate summaries, correct grammar, and organize notes intelligently.',
  },
  hackathon: {
    id: 'hackathon',
    name: 'Inter-College Hackathon Website',
    subtitle: 'Event Management & Registration Platform Frontend',
    category: 'Team Collaboration Project',
    categoryColor: 'purple',
    description:
      'Developed the complete frontend interface for an inter-college hackathon event website as part of a collaborative engineering team. Engineered responsive UI components to deliver a seamless registration experience.',
    features: [
      'Responsive UI Components',
      'Event Schedule Pages',
      'Team Registration Interface',
      'Optimized User Experience',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    liveUrl: 'https://ignite2k26.vercel.app/',
    githubUrl: 'https://github.com/rajesh9474/',
    liveLabel: 'ignite2k26.vercel.app',
    modalDetail:
      'The Inter-College Hackathon Website was a collaborative team project. Rajesh built responsive, mobile-first frontend pages covering event guidelines, schedules, problem statements, and registration forms.',
  },
  marco: {
    id: 'marco',
    name: 'Marco',
    subtitle: 'AI-Powered Travel & Navigation Android Application',
    category: 'Android / AI Application',
    categoryColor: 'emerald',
    isApk: true,
    description:
      'Marco is an intelligent Android app that helps users explore destinations, plan travel routes, and get AI-driven recommendations. It combines location intelligence with a conversational interface to make navigation smarter and more intuitive — right from your phone.',
    features: [
      'AI Conversational Navigation',
      'Location-Aware Recommendations',
      'Dynamic Route Planning',
      'Offline-Ready Mobile Experience',
    ],
    tech: ['Android', 'Kotlin', 'AI Integration', 'Google Maps API', 'Material Design'],
    liveUrl: 'https://github.com/rajesh9474/MARCO/releases',
    githubUrl: 'https://github.com/rajesh9474/MARCO',
    liveLabel: 'Download APK',
    modalDetail:
      'Marco is an AI-powered Android travel and navigation application. It uses conversational AI to answer destination queries, suggest optimal routes, and provide smart travel tips. The APK is available for direct download from GitHub Releases.',
  },
  rayon: {
    id: 'rayon',
    name: 'Rayon News',
    subtitle: 'AI-Powered Global News Android Application',
    category: 'Android / News Application',
    categoryColor: 'amber',
    isApk: true,
    description:
      'RAYON is an AI-powered global news Android app designed to help people understand what is happening around the world in just a few minutes every morning. It brings together world news, country-level updates, and category-based browsing in a clean, distraction-free interface.',
    features: [
      'AI-Curated Global News Feed',
      'Category & Country-Based Browsing',
      'Clean Article Reading View',
      'Real-Time News Search',
    ],
    tech: ['Android', 'Kotlin', 'News API', 'Material Design', 'GitHub Actions CI/CD'],
    liveUrl: 'https://github.com/rajesh9474/RAYON-NEWS/releases/tag/debug-apk-build-2-1',
    githubUrl: 'https://github.com/rajesh9474/RAYON-NEWS',
    liveLabel: 'Download APK',
    modalDetail:
      'Rayon News is an AI-powered global news Android application. Users can browse news by category and country, search articles, and enjoy distraction-free reading. The APK is automatically built via GitHub Actions CI/CD and available for download from GitHub Releases (tag: debug-apk-build-2-1).',
  },
};

// ─── Color config per category ────────────────────────────────────────────────
const COLOR = {
  cyan: {
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
    border: 'border-cyan-500/30 hover:border-cyan-500/60',
    glow: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
    title: 'group-hover:text-cyan-300',
    check: 'text-cyan-400',
    btn: 'from-cyan-500 to-purple-600 text-slate-950 shadow-glow-cyan',
    details: 'hover:border-cyan-500/50',
    detailIcon: 'text-cyan-400',
    globe: 'text-emerald-400 hover:text-emerald-300',
    globeIcon: 'text-emerald-400',
    sub: 'text-cyan-400',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    border: 'border-slate-800/80 hover:border-purple-500/40',
    glow: 'opacity-0',
    title: 'group-hover:text-purple-300',
    check: 'text-purple-400',
    btn: 'from-purple-600 to-indigo-600 text-white',
    details: 'hover:border-purple-500/50',
    detailIcon: 'text-purple-400',
    globe: 'hover:text-purple-300 text-slate-300',
    globeIcon: 'text-purple-400',
    sub: 'text-purple-400',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    border: 'border-slate-800/80 hover:border-emerald-500/40',
    glow: 'opacity-0',
    title: 'group-hover:text-emerald-300',
    check: 'text-emerald-400',
    btn: 'from-emerald-500 to-teal-600 text-slate-950',
    details: 'hover:border-emerald-500/50',
    detailIcon: 'text-emerald-400',
    globe: 'hover:text-emerald-300 text-slate-300',
    globeIcon: 'text-emerald-400',
    sub: 'text-emerald-400',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    border: 'border-slate-800/80 hover:border-amber-500/40',
    glow: 'opacity-0',
    title: 'group-hover:text-amber-300',
    check: 'text-amber-400',
    btn: 'from-amber-500 to-orange-600 text-slate-950',
    details: 'hover:border-amber-500/50',
    detailIcon: 'text-amber-400',
    globe: 'hover:text-amber-300 text-slate-300',
    globeIcon: 'text-amber-400',
    sub: 'text-amber-400',
  },
};

// ─── Category Icon Map ────────────────────────────────────────────────────────
function CategoryIcon({ id, className }) {
  if (id === 'brainnova') return <Sparkles className={className} />;
  if (id === 'hackathon') return <Users className={className} />;
  if (id === 'marco') return <Navigation className={className} />;
  if (id === 'rayon') return <Newspaper className={className} />;
  return <Cpu className={className} />;
}

// ─── Project Card Preview (right panel) ──────────────────────────────────────
function ProjectPreview({ project, c }) {
  if (project.id === 'brainnova') {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner group-hover:border-cyan-400/50 transition-all">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono text-cyan-400 flex items-center space-x-1">
            <Bot className="w-3 h-3" /><span>BrainNova Assistant v1.0</span>
          </span>
        </div>
        <div className="space-y-2.5 py-4 relative z-10">
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
            <span className="text-cyan-400 font-mono font-bold block mb-1 text-[11px]">User Input:</span>
            "Summarize my notes on Neural Networks."
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200">
            <span className="text-purple-300 font-mono font-bold flex items-center space-x-1 mb-1 text-[11px]">
              <Sparkles className="w-3 h-3 text-cyan-400" /><span>BrainNova AI:</span>
            </span>
            "Summary: Forward propagation, gradient descent, loss optimization."
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between relative z-10">
          <span>Status: Deployed & Active</span>
          <span className="text-emerald-400 flex items-center space-x-1">
            <span>Open App</span><ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </a>
    );
  }

  if (project.id === 'hackathon') {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner hover:border-purple-500/50 transition-all">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-[10px] font-mono text-slate-400">Hackathon Event Portal</span>
          <span className="text-[10px] font-mono text-purple-400 flex items-center space-x-1">
            <span>ignite2k26.vercel.app</span><ExternalLink className="w-3 h-3" />
          </span>
        </div>
        <div className="space-y-2 py-4">
          <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
            <span>Event Registration Form</span><span className="text-emerald-400 text-[10px]">Live</span>
          </div>
          <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
            <span>Tracks & Problem Statements</span><span className="text-cyan-400 text-[10px]">Responsive</span>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
          <span>Frontend Developer</span><span className="text-purple-300">Open Live Site</span>
        </div>
      </a>
    );
  }

  if (project.id === 'marco') {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner hover:border-emerald-400/50 transition-all">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 relative z-10">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono text-emerald-400 flex items-center space-x-1">
            <Navigation className="w-3 h-3" /><span>Marco AI Navigator</span>
          </span>
        </div>
        <div className="space-y-2.5 py-4 relative z-10">
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200">
            <span className="text-emerald-400 font-mono font-bold block mb-1 text-[11px]">User:</span>
            "Find the best route from Chennai to Ooty."
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200">
            <span className="text-emerald-300 font-mono font-bold flex items-center space-x-1 mb-1 text-[11px]">
              <MapPin className="w-3 h-3 text-emerald-400" /><span>Marco:</span>
            </span>
            "Route found: 540 km · 9 hrs · Scenic mountain road."
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex justify-between relative z-10">
          <span>Status: APK Available</span>
          <span className="text-emerald-400 flex items-center space-x-1">
            <span>Download APK</span><Download className="w-2.5 h-2.5" />
          </span>
        </div>
      </a>
    );
  }

  if (project.id === 'rayon') {
    return (
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full rounded-xl sm:rounded-2xl bg-slate-900/90 border border-amber-500/30 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-inner hover:border-amber-400/50 transition-all">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-[10px] font-mono text-slate-400">Rayon News Platform</span>
          <span className="text-[10px] font-mono text-amber-400 flex items-center space-x-1">
            <Rss className="w-3 h-3" /><span>Live Feed</span>
          </span>
        </div>
        <div className="space-y-2 py-4">
          <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
            <span className="flex items-center space-x-1.5"><Search className="w-3 h-3 text-amber-400" /><span>Search Articles</span></span>
            <span className="text-amber-400 text-[10px]">Real-Time</span>
          </div>
          <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
            <span>Tech · Sports · World</span><span className="text-cyan-400 text-[10px]">Categories</span>
          </div>
          <div className="w-full h-7 sm:h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-between px-3 text-xs font-mono text-slate-300">
            <span>Article Reader</span><span className="text-emerald-400 text-[10px]">Responsive</span>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
          <span>Status: APK Available</span>
          <span className="text-amber-300 flex items-center space-x-1">
            <span>Download APK</span><Download className="w-2.5 h-2.5" />
          </span>
        </div>
      </a>
    );
  }

  return null;
}

// ─── Generic Project Card ─────────────────────────────────────────────────────
function ProjectCard({ project, onDetails, featured = false }) {
  const c = COLOR[project.categoryColor];
  const titleSize = featured
    ? 'text-2xl sm:text-3xl lg:text-4xl'
    : 'text-xl sm:text-2xl lg:text-3xl';

  return (
    <div className={`glass-panel rounded-2xl sm:rounded-3xl border ${c.border} p-5 sm:p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 shadow-2xl`}>
      {featured && (
        <div className={`absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 ${c.glow} rounded-full blur-3xl pointer-events-none transition-all`} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
        {/* Details */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${c.badge} text-xs font-mono font-semibold border`}>
            <CategoryIcon id={project.id} className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <div>
            <h3 className={`font-outfit ${titleSize} font-extrabold text-white ${c.title} transition-colors`}>
              {project.name}
            </h3>
            <p className={`${c.sub} font-mono text-xs sm:text-sm mt-1`}>{project.subtitle}</p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {project.features.map(f => (
              <div key={f} className="flex items-center space-x-2 text-xs text-slate-200">
                <CheckCircle2 className={`w-4 h-4 ${c.check} flex-shrink-0`} />
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.isApk ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${c.btn} font-bold text-xs tracking-wider uppercase flex items-center space-x-2 hover:opacity-95 transition-all`}>
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>
            ) : (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${c.btn} font-bold text-xs tracking-wider uppercase flex items-center space-x-2 hover:opacity-95 transition-all`}>
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all ${c.details}`}>
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button onClick={() => onDetails(project.id)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider flex items-center space-x-2 transition-all ${c.details}`}>
              <span>Details</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${c.detailIcon}`} />
            </button>

            {project.isApk ? (
              <div className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800">
                <Smartphone className={`w-3.5 h-3.5 ${c.globeIcon}`} />
                <span>Android App</span>
              </div>
            ) : (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className={`hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono ${c.globe} transition-colors bg-slate-900/90 px-3 py-2 rounded-lg border border-slate-800`}>
                <Globe className={`w-3.5 h-3.5 ${c.globeIcon}`} />
                <span>{project.liveLabel}</span>
              </a>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-5">
          <ProjectPreview project={project} c={c} />
        </div>
      </div>
    </div>
  );
}

// ─── Details Modal ────────────────────────────────────────────────────────────
function ProjectModal({ projectId, onClose }) {
  if (!projectId) return null;
  const project = PROJECTS[projectId];
  const c = COLOR[project.categoryColor];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-panel w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-5 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start border-b border-slate-800 pb-4">
          <div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
            <p className={`text-xs font-mono ${c.sub} mt-1`}>{project.subtitle}</p>
          </div>
          <button onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white ml-4 flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <p>{project.modalDetail}</p>

          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Features</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map(f => (
                <div key={f} className="flex items-center space-x-2 text-xs text-slate-200">
                  <CheckCircle2 className={`w-4 h-4 ${c.check} flex-shrink-0`} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Live Deployment</span>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className={`text-xs font-mono ${c.sub} hover:underline flex items-center space-x-1 break-all`}>
              <span>{project.liveUrl}</span>
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
          {project.isApk ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs uppercase flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </a>
          ) : (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs uppercase flex items-center justify-center space-x-2">
              <span>Launch Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs uppercase hover:bg-slate-700 flex items-center justify-center space-x-2">
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
          <button onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs uppercase hover:bg-slate-700 text-center">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Engineered with <span className="text-gradient">Precision & AI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base px-2 sm:px-0">
            Showcasing real-world web applications and intelligent software solutions built by Rajesh.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-12">
          <ProjectCard project={PROJECTS.brainnova} onDetails={setActiveProjectModal} featured />
          <ProjectCard project={PROJECTS.hackathon} onDetails={setActiveProjectModal} />
          <ProjectCard project={PROJECTS.marco} onDetails={setActiveProjectModal} />
          <ProjectCard project={PROJECTS.rayon} onDetails={setActiveProjectModal} />
        </div>

      </div>

      {/* Modal */}
      <ProjectModal projectId={activeProjectModal} onClose={() => setActiveProjectModal(null)} />
    </section>
  );
}
