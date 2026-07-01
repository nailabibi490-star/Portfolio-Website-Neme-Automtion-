import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

export default function WhatWeDoSection() {
  return (
    <section className="w-full bg-navy-panel">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-base text-light-gray leading-relaxed mb-8">
              NEME builds automation systems for home service businesses — specifically around missed calls, lead follow-up, and booking. Our team handles the entire setup and provides ongoing maintenance, so your system keeps working without you lifting a finger.
            </p>
            <CTAButton to="/services" variant="secondary">
              See Our Solutions
            </CTAButton>
          </motion.div>

          {/* Right: Decorative visual (pure CSS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Large teal circle */}
              <div className="absolute inset-0 rounded-full bg-teal/10" />
              {/* Smaller solid teal circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-teal/30" />
              {/* White dots */}
              <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-white/60" />
              <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-white/40" />
              <div className="absolute top-1/3 right-8 w-4 h-4 rounded-full bg-teal-muted/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
