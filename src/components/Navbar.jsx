import React from 'react';
import { Cpu, Sparkles, LayoutDashboard, Moon, Sun, User, LogOut, Code2 } from 'lucide-react';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  user, 
  onOpenAuth, 
  onLogout, 
  theme, 
  toggleTheme,
  activeProject
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                AppForge <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 rounded-full">
                v2.4
              </span>
            </div>
            <span className="text-[10px] text-slate-400 hidden sm:inline">Prompt-to-Mobile App Engine</span>
          </div>
        </div>

        {/* Center Nav Links */}
        {currentView === 'landing' && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How it Works</a>
            <a href="#templates" className="hover:text-indigo-400 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
          </nav>
        )}

        {/* View Badges (If inside Studio or Dashboard) */}
        {currentView !== 'landing' && (
          <div className="hidden sm:flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs">
            <button
              onClick={() => setCurrentView('landing')}
              className="px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white transition-colors"
            >
              Landing
            </button>
            <button
              onClick={() => setCurrentView('studio')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                currentView === 'studio' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              AI Studio
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                currentView === 'dashboard' || currentView === 'analytics' || currentView === 'settings'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard
            </button>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* Launch Studio CTA */}
          {currentView === 'landing' && (
            <button
              onClick={() => setCurrentView('studio')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              Launch Studio
            </button>
          )}

          {/* User Profile or Sign In */}
          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div 
                onClick={() => setCurrentView('settings')}
                className="flex items-center gap-2.5 cursor-pointer p-1.5 rounded-xl hover:bg-slate-900 transition-colors"
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full border border-indigo-500/50 object-cover" 
                />
                <div className="hidden lg:flex flex-col text-left">
                  <span className="text-xs font-semibold text-white leading-tight">{user.name}</span>
                  <span className="text-[10px] text-indigo-400 font-medium">{user.plan} Plan</span>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-900 rounded-xl transition-colors"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 rounded-xl hover:bg-slate-800 transition-all"
            >
              <User className="w-4 h-4 text-indigo-400" />
              Sign In
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
