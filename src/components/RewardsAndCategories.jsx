import React from 'react';
import { motion } from 'framer-motion';
import { Play, Gift, ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Luxury Watches',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Designer Bags',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Premium Sneakers',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Tech & Audio',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Jewelry',
    image:
      'https://images.unsplash.com/photo-1603565816279-405a8f5c8f43?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Streetwear',
    image:
      'https://images.unsplash.com/photo-1548883348-7d333bfdb2df?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function RewardsAndCategories() {
  return (
    <section className="relative" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          <motion.div
            id="rewards"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 overflow-hidden backdrop-blur-xl"
          >
            <div className="absolute -inset-6 bg-[radial-gradient(400px_200px_at_20%_20%,rgba(234,179,8,0.18),transparent_60%)]" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80">
                <Gift className="w-4 h-4 text-amber-300" /> Earn Credits on Every Purchase
              </div>
              <h3 className="text-2xl font-semibold leading-tight">Earn Store Credits on Every Purchase</h3>
              <p className="text-white/75">Spend $50 or more and get 10% back in store credits. Use them instantly or withdraw as cash after a year.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 text-black font-medium shadow-[0_8px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_40px_rgba(234,179,8,0.55)] transition">
                  Learn More About Credits <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
                  <Play className="w-4 h-4" /> Watch Video & Earn Credits
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Shop by Category</h3>
                <p className="text-white/70 text-sm">Discover curated collections across iconic luxury verticals.</p>
              </div>
              <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200">View all <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((c) => (
                <motion.a
                  key={c.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 h-44 sm:h-56"
                >
                  <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                  <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 p-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs">
                      <span className="font-medium">{c.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="trust" className="max-w-7xl mx-auto px-6 mt-20">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
          <div className="absolute -inset-10 bg-[radial-gradient(700px_300px_at_80%_10%,rgba(234,179,8,0.18),transparent_60%)]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold">Verified sellers. Buyer protection. Zero compromises.</h4>
              <p className="text-white/70 text-sm">We vet every seller and safeguard every transaction with enterprise-grade security.</p>
            </div>
            <a href="#sell" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-600 text-black font-medium shadow-[0_8px_30px_rgba(234,179,8,0.35)] hover:shadow-[0_8px_40px_rgba(234,179,8,0.55)] transition">
              Sell Your Products
            </a>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </section>
  );
}
