import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import RewardsAndCategories from './components/RewardsAndCategories.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10 selection:text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <FeatureGrid />
        <RewardsAndCategories />
      </main>
      <footer className="relative border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} The Premium Brand Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <span className="opacity-20">•</span>
            <a href="#" className="hover:text-white transition">Terms</a>
            <span className="opacity-20">•</span>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
