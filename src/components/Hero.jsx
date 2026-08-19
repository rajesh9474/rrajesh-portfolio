import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Bot, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function Hero({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rrajeshsk555@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge & Profile Avatar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 opacity-80 blur-sm group-hover:opacity-100 transition" />
                <img 
                  src={profilePic} 
                  alt="R Rajesh" 
                  className="relative w-12 h-12 rounded-full object-cover object-top border-2 border-cyan-400/80 shadow-glow-cyan"
                />
              </div>
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-glow-cyan">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Available for AI & Web Dev Projects</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-white">
              Building <span className="text-gradient">Intelligent</span> Digital Experiences.
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Rajesh</strong> — a Final Year AI & Machine Learning student passionate about software development, web technologies, and building innovative AI-powered applications.
            </p>

            {/* Key Quick Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-cyan-300 border border-slate-700/60">
                Final Year B.E. AI & ML
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-purple-300 border border-slate-700/60">
                CGPA: 8.01
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-emerald-300 border border-slate-700/60">
                Python & Web Tech
              </span>
            </div>

            {/* Primary Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-glow-cyan hover:opacity-95 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Rajesh_Resume.pdf"
                download="Rajesh_Resume.pdf"
                onClick={() => {
                  onOpenResumeModal();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm tracking-wide flex items-center justify-center space-x-2 transition-all hover:border-cyan-500/50 hover:text-white cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Links (GitHub, LinkedIn, Email) */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-slate-400 text-xs font-mono">
              <span className="text-slate-500 uppercase tracking-widest text-[11px]">Connect:</span>

              <a
                href="https://github.com/rajesh9474/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                <span>github.com/rajesh9474</span>
              </a>

              <a
                href="https://linkedin.com/in/r-rajesh-05997633a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-purple-400 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-purple-400" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors group"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                <span>{copiedEmail ? 'Copied!' : 'rrajeshsk555@gmail.com'}</span>
                {copiedEmail && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>

          </div>

          {/* Right Column: Hero Profile Photo Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Animated Glowing Outer Aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 opacity-75 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse-slow" />
              
              {/* Glass Card Container */}
              <div className="relative rounded-3xl glass-panel p-3 border border-cyan-500/40 shadow-2xl overflow-hidden">
                
                {/* Floating Top Badge */}
                <div className="absolute top-6 left-6 z-20 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-cyan-500/50 text-[11px] font-mono text-cyan-300 flex items-center space-x-2 backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>R. Rajesh • Final Year B.E.</span>
                </div>

                {/* Profile Image Frame */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 relative border border-slate-800">
                  <img 
                    src={profilePic} 
                    alt="R Rajesh - B.E. Artificial Intelligence & Machine Learning Student" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-4 inset-x-4 z-20 glass-panel p-3.5 rounded-xl border border-cyan-500/30 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h3 className="font-outfit font-bold text-white text-base">R. RAJESH</h3>
                      <p className="text-[11px] font-mono text-cyan-300">B.E. AI & ML Engineer</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-400/30">
                      Tamil Nadu, IN
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
