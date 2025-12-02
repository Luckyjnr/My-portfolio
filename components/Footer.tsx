import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Lucky Noah. Built with React, Tailwind & Google Gemini.
        </p>
      </div>
    </footer>
  );
};