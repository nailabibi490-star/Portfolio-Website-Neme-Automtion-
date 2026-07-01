import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

export default function ClosingCTASection() {
  return (
    <section className="w-full bg-navy relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(29, 158, 117, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-[600px] mx-auto mb-8">
            See exactly where your business is losing leads.
          </h2>
          <CTAButton to="/contact" size="large">
            Book a Free Consultation
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
