import React, { useState, useEffect } from 'react';
import BacterialDiagram from './components/BacterialDiagram';
import ContentCard from './components/ContentCard';
import { studyData } from './data';
import { StudySection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-xl">BV</div>
                <div>
                    <h1 className="text-xl font-bold text-slate-800 leading-tight">BacterioVisual</h1>
                    <p className="text-xs text-slate-500">Interactive Microbiology Study Guide</p>
                </div>
            </div>
            
            <nav className="hidden md:flex space-x-4 text-sm font-medium text-slate-600">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-indigo-600">Diagram</button>
                {studyData.map(s => (
                    <button 
                        key={s.id} 
                        onClick={() => handleSectionClick(s.id)}
                        className={`hover:text-indigo-600 ${activeSection === s.id ? 'text-indigo-600 font-bold' : ''}`}
                    >
                        {s.title.split(' ')[0]}
                    </button>
                ))}
            </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Intro Section */}
        <section className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Bacterial Structure & Function
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore the anatomy of a bacterium. Click on the diagram parts to jump to detailed study notes, or use the cards below to review essential keywords and definitions.
            </p>
        </section>

        {/* Interactive Diagram Section */}
        <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
                <BacterialDiagram onPartClick={handleSectionClick} activeSection={activeSection} />
            </div>
        </section>

        {/* Content Cards */}
        <section className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
                <div className="h-px bg-slate-300 flex-1"></div>
                <span className="text-slate-400 font-semibold text-sm uppercase tracking-wider">Detailed Study Notes</span>
                <div className="h-px bg-slate-300 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {studyData.map((section: StudySection) => (
                    <ContentCard key={section.id} section={section} />
                ))}
            </div>
        </section>

        <footer className="mt-20 py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} BacterioVisual Study Tool. Powered by Gemini.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
