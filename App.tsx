import React, { useState, Suspense } from 'react';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsRadar } from './components/SkillsRadar';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Education } from './components/Education';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';
import { RESUME_DATA } from './constants';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-4">Please refresh the page or contact Lucky directly.</p>
            <a 
              href={`mailto:${RESUME_DATA.personalInfo.email}`}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Lucky
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Navigation Anchor */}
          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0 font-bold text-xl text-indigo-600 tracking-tight">
                  LN.
                </div>
                <div className="hidden md:flex space-x-8">
                  <a href="#about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About</a>
                  <a href="#experience" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Experience</a>
                  <a href="#skills" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Skills</a>
                  <a href="#projects" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Projects</a>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-grow pt-16">
            <section id="hero">
              <Hero />
            </section>

            <section id="about" className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Summary text={RESUME_DATA.summary} />
                <Education education={RESUME_DATA.education} />
              </div>
            </section>

            <section id="experience" className="py-20 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Professional Experience</h2>
                  <p className="mt-4 text-lg text-slate-600">My journey in backend engineering and system architecture.</p>
                </div>
                <ExperienceTimeline experiences={RESUME_DATA.experience} />
              </div>
            </section>

            <section id="skills" className="py-20 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Technical Proficiency</h2>
                  <p className="mt-4 text-lg text-slate-600">A visual breakdown of my core competencies.</p>
                </div>
                <SkillsRadar skills={RESUME_DATA.skills} />
              </div>
            </section>

            <section id="projects" className="py-20 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
                  <p className="mt-4 text-lg text-slate-400">Deep dive into my recent architectural work.</p>
                </div>
                <ProjectShowcase projects={RESUME_DATA.projects} />
              </div>
            </section>
          </main>

          <Footer />
          
          {/* Interactive AI Assistant */}
          <ChatWidget resumeData={RESUME_DATA} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;