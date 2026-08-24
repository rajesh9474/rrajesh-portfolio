import React from 'react';
import { X, Printer, Download, Mail, Linkedin, Github, MapPin, GraduationCap, Award, Code2, Users } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-lg overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Top Header Actions */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 sticky top-0 bg-slate-900/95 backdrop-blur-md z-20 pt-2">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">R. Rajesh — Official Curriculum Vitae</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="/Rajesh_Resume.pdf"
              download="Rajesh_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-glow-cyan transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center space-x-2 transition-all"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print View</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="space-y-8 text-slate-200">
          
          {/* Header Bio */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950 flex-shrink-0 shadow-lg">
              <img 
                src={profilePic} 
                alt="R Rajesh" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-2 flex-1">
              <h1 className="font-outfit text-3xl font-extrabold text-white">R RAJESH</h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold">
                Final Year B.E. Artificial Intelligence & Machine Learning Student
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tamil Nadu, India</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>rrajeshsk555@gmail.com</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                  <span>linkedin.com/in/r-rajesh-05997633a/</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>github.com/rajesh9474/</span>
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base">B.E. Artificial Intelligence and Machine Learning</h3>
                <span className="text-xs font-mono text-cyan-400">2023 – 2027</span>
              </div>
              <p className="text-xs font-mono text-emerald-400">CGPA: 8.01 / 10.0</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span>Technical Skills</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
              <p><strong className="text-cyan-300">Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, React</p>
              <p><strong className="text-purple-300">Backend:</strong> Python</p>
              <p><strong className="text-emerald-300">Tools & Environments:</strong> Git & GitHub, VS Code, Replit, Emergent, Bolt, Antigravity, Cursor, Stitch</p>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-3">
            <h2 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span>Soft Skills & Languages</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
              <p><strong className="text-white">Soft Skills:</strong> Teamwork, Communication, Adaptability, Time Management, Problem Solving, Active Listening</p>
              <p><strong className="text-white">Languages Spoken:</strong> Tamil, English, Hindi</p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Projects</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="font-bold text-white text-base">BrainNova AI — AI-Powered Note-Taking Application</h3>
                  <a
                    href="https://note-mind-ai-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline"
                  >
                    https://note-mind-ai-six.vercel.app/
                  </a>
                </div>
                <p className="text-xs text-slate-300">
                  Built and deployed an AI-powered note-taking web application with a conversational assistant for Summarization, Grammar correction, Content editing, and Intelligent note management. Deployed on Vercel.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="font-bold text-white text-base">Marco — AI-Powered Travel & Navigation Android App</h3>
                  <a
                    href="https://github.com/rajesh9474/MARCO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-400 hover:underline"
                  >
                    GitHub & APK Release
                  </a>
                </div>
                <p className="text-xs text-slate-300">
                  Built an intelligent Android application with Kotlin and conversational AI for route planning, destination discovery, and location-aware recommendations. APK published on GitHub Releases.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                <div className="flex flex-wrap justify-between items-center">
                  <h3 className="font-bold text-white text-base">Rayon News — Global News Android Application</h3>
                  <a
                    href="https://github.com/rajesh9474/RAYON-NEWS/releases/tag/debug-apk-build-2-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:underline"
                  >
                    Download APK Build #2
                  </a>
                </div>
                <p className="text-xs text-slate-300">
                  Developed an AI-powered global news Android application in Kotlin with real-time news search, country-level filters, and automated CI/CD APK generation via GitHub Actions.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h2 className="font-outfit text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Achievements & Certifications</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
              <p>• <strong>Internship Masterclass Certificate</strong> — Novitech Academy, Chennai</p>
              <p>• <strong>AI Upskilling Certificate: Technical Foundation</strong> — Qualcomm Academy</p>
              <p>• <strong>Industrial Visit Certificate</strong> — Suffix E Solution</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Official Resume Data • R Rajesh</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
}
