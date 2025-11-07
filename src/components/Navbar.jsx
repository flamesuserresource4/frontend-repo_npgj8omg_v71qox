import React, { useState } from 'react';
import { ShoppingBag, ShieldCheck, Coins, Menu, X, Sun, Moon, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl ${dark ? 'bg-black/40' : 'bg-white/40'} border-b ${dark ? 'border-white/10' : 'border-black/10'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 shadow-[0_0_40px_-10px_rgba(234,179,8,0.7)]" />
          <div className="leading-tight">
            <p className={`font-semibold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>Premium Brand</p>
            <p className={`text-xs uppercase tracking-wider ${dark ? 'text-white/60' : 'text-black/60'}`}>Marketplace</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className={`${dark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition`}>Features</a>
          <a href="#categories" className={`${dark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition`}>Categories</a>
          <a href="#rewards" className={`${dark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition`}>Rewards</a>
          <a href="#trust" className={`${dark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition`}>Trust</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full ${dark ? 'bg-white/10 text-white' : 'bg-black/10 text-black'} border ${dark ? 'border-white/10' : 'border-black/10'} shadow-inner`}> 
            <Coins className="w-4 h-4 text-amber-300" />
            <span className="text-xs">Credits</span>
            <span className="text-xs font-semibold">$128.50</span>
          </div>
          <button onClick={() => setDark(v => !v)} aria-label="toggle theme" className={`p-2 rounded-full ${dark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}>
            {dark ? <Sun className="w-5 h-5 text-white/90" /> : <Moon className="w-5 h-5 text-black/90" />}
          </button>
          <a href="#start" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 text-black font-medium shadow-[0_8px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_40px_rgba(234,179,8,0.55)] transition">
            <Rocket className="w-4 h-4" /> Start Shopping
          </a>
          <button onClick={() => setOpen(o => !o)} className={`md:hidden p-2 rounded-lg ${dark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} aria-label="menu">
            {open ? <X className={`${dark ? 'text-white' : 'text-black'}`} /> : <Menu className={`${dark ? 'text-white' : 'text-black'}`} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden px-6 pb-6 space-y-3 ${dark ? 'text-white' : 'text-black'}`}>
          <a href="#features" className="block opacity-80 hover:opacity-100">Features</a>
          <a href="#categories" className="block opacity-80 hover:opacity-100">Categories</a>
          <a href="#rewards" className="block opacity-80 hover:opacity-100">Rewards</a>
          <a href="#trust" className="block opacity-80 hover:opacity-100">Trust</a>
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
              <Coins className="w-4 h-4 text-amber-300" />
              <span className="text-xs">Credits</span>
              <span className="text-xs font-semibold">$128.50</span>
            </div>
            <a href="#start" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 text-black font-medium shadow-[0_8px_30px_rgba(234,179,8,0.35)]">
              <ShoppingBag className="w-4 h-4" /> Start
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
