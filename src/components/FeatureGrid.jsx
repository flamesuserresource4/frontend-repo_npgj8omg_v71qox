import React from 'react';
import { ShieldCheck, CreditCard, Truck, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Store Credits',
    desc: 'Earn 10% credits on purchases over $50. Withdraw after a year or use instantly.',
    Icon: CreditCard,
    glow: 'from-amber-300/30 to-yellow-500/30'
  },
  {
    title: 'Secure Trading',
    desc: 'Verified sellers and buyer protection on every order.',
    Icon: ShieldCheck,
    glow: 'from-emerald-300/30 to-teal-500/30'
  },
  {
    title: 'Flexible Delivery',
    desc: 'Pickup, standard, or urgent delivery options.',
    Icon: Truck,
    glow: 'from-violet-300/30 to-indigo-500/30'
  },
  {
    title: 'Multiple Payments',
    desc: 'Bank transfer, cash, or store credits at checkout.',
    Icon: Wallet,
    glow: 'from-blue-300/30 to-cyan-500/30'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_20%,rgba(234,179,8,0.14),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience trust, speed, and rewards</h2>
            <p className="text-white/70">Every interaction is protected and optimized for value.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, Icon, glow }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl overflow-hidden"
            >
              <div className={`absolute -inset-2 opacity-40 bg-gradient-to-br ${glow} blur-2xl`} />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 w-11 h-11">
                  <Icon className="w-5 h-5 text-amber-200" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                <div className="pt-1">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
