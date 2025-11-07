import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center" id="start">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[20%] opacity-60">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_30%,rgba(234,179,8,0.14),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-[900] tracking-tight"
          >
            <span className="bg-gradient-to-br from-zinc-100 via-white to-amber-200 bg-clip-text text-transparent">
              The Premium Brand Marketplace
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 max-w-xl"
          >
            Buy, sell, and discover premium brands with our innovative store credit system. Earn rewards, get exclusive offers, and connect with verified sellers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#start" className="group relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-black font-semibold bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 shadow-[0_12px_50px_rgba(234,179,8,0.35)] hover:shadow-[0_12px_60px_rgba(234,179,8,0.55)] transition">
              <span className="relative z-10">Start Shopping</span>
            </a>
            <a href="#sell" className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white hover:bg-white/10 transition">
              Sell Your Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Products Sold', value: '1M+' },
              { label: 'Satisfaction', value: '99.9%' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                <div className="text-2xl font-extrabold text-amber-300">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block" aria-hidden>
          <div className="aspect-[4/5] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 opacity-80">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
