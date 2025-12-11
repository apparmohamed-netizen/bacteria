import React, { useState } from 'react';
import { StudySection, SubSection } from '../types';
import { explainConcept, generateQuizQuestion } from '../services/geminiService';

interface Props {
  section: StudySection;
}

const ContentCard: React.FC<Props> = ({ section }) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingAI, setLoadingAI] = useState(false);
  const [quizData, setQuizData] = useState<{question: string, options: string[], answer: number} | null>(null);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const handleExplain = async (term: string) => {
    setLoadingAI(true);
    setExplanation(null);
    setQuizData(null);
    const text = await explainConcept(term, section.title);
    setExplanation(`AI Explanation for "${term}": ${text}`);
    setLoadingAI(false);
  };

  const handleQuiz = async () => {
      setLoadingAI(true);
      setExplanation(null);
      setQuizData(null);
      setQuizResult(null);
      const data = await generateQuizQuestion(section.title);
      setQuizData(data);
      setLoadingAI(false);
  };

  const handleAnswer = (index: number) => {
      if (!quizData) return;
      if (index === quizData.answer) {
          setQuizResult("Correct! 🎉");
      } else {
          setQuizResult("Incorrect. Try again.");
      }
  };

  return (
    <div id={section.id} className={`mb-8 rounded-xl shadow-md overflow-hidden bg-white border-l-8 ${section.color.replace('text-', 'border-').split(' ')[0]}`}>
      <div className={`p-4 ${section.color} flex justify-between items-center`}>
        <h2 className="text-2xl font-bold">{section.title}</h2>
        <button 
            onClick={handleQuiz}
            className="bg-white/50 hover:bg-white/80 text-gray-800 font-semibold py-1 px-3 rounded text-sm transition-colors"
        >
            Quiz Me
        </button>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.content.map((sub: SubSection, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">{sub.title}</h3>
              <ul className="space-y-2">
                {sub.keywords.map((kw, kIdx) => (
                  <li key={kIdx} className="flex items-start group">
                    <span className="mr-2 text-gray-400 mt-1">•</span>
                    <span className="text-gray-700 leading-relaxed cursor-pointer hover:text-blue-600 transition-colors" 
                          onClick={() => handleExplain(kw)}>
                      {kw.split('(').map((part, i) => (
                        <span key={i} className={i === 0 ? "font-medium" : "text-gray-500 text-sm ml-1"}>
                          {i === 0 ? part : `(${part}`}
                        </span>
                      ))}
                    </span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 text-xs bg-blue-100 text-blue-600 px-1 rounded">Ask AI</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Interaction Area */}
        {(loadingAI || explanation || quizData) && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            {loadingAI && (
               <div className="flex items-center space-x-2 text-indigo-600">
                 <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                 <span>Consulting AI Tutor...</span>
               </div>
            )}
            
            {explanation && !loadingAI && (
              <div className="text-indigo-900">
                <p className="font-semibold mb-1">💡 Study Tip:</p>
                <p>{explanation}</p>
              </div>
            )}

            {quizData && !loadingAI && (
                <div className="text-indigo-900 w-full">
                    <p className="font-bold mb-3">❓ Question: {quizData.question}</p>
                    <div className="grid grid-cols-1 gap-2">
                        {quizData.options.map((opt, i) => (
                            <button 
                                key={i}
                                onClick={() => handleAnswer(i)}
                                className="text-left px-4 py-2 bg-white rounded border border-indigo-200 hover:bg-indigo-100 transition-colors"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    {quizResult && (
                        <div className={`mt-3 font-bold ${quizResult.includes('Correct') ? 'text-green-600' : 'text-red-500'}`}>
                            {quizResult}
                        </div>
                    )}
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
