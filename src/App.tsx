import React from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Experience } from '@/components/experience/Experience';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/footer/Footer';

const AppContent: React.FC = () => {
  const activeSection = useActiveSection([
    'hero',
    'about',
    'experience',
    'skills',
    'projects',
    'contact',
  ]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-blue-600/30 selection:text-blue-200 relative overflow-x-hidden">
      {/* Background Ambience & Subtle Grid Accent (GPU composited) */}
      <div className="fixed inset-0 pointer-events-none bg-ambient-glow z-0" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none bg-grid-subtle opacity-40 z-0" aria-hidden="true" />

      {/* Main Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Application Landmarks */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
