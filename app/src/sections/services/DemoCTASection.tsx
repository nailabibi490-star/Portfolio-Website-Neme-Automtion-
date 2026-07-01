import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function DemoCTASection() {
  return (
    <section className="w-full bg-navy-panel">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See it in action
          </h3>
          <p className="text-base text-light-gray max-w-[500px] mx-auto mb-10">
            Watch a short demo to see how these systems work for real home service businesses.
          </p>

          {/* Video placeholder */}
          <div className="mx-auto max-w-[640px] aspect-video bg-navy rounded-2xl border border-dashed border-teal/40 flex flex-col items-center justify-center mb-10">
            <PlayCircle className="w-12 h-12 text-teal-muted mb-3" strokeWidth={1.5} />
            <p className="text-base text-white font-medium">Demo video coming soon</p>
            <p className="text-sm text-teal-muted mt-1">(Loom embed placeholder)</p>
          </div>

          <CTAButton to="/contact" size="default">
            Book a Free Consultation
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
