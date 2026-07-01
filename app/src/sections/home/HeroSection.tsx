import { motion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background abstract image */}
      <div className="absolute right-0 top-0 w-[60%] h-full opacity-40 pointer-events-none hidden lg:block">
        <img
          src="/hero-abstract.png"
          alt=""
          className="w-full h-full object-contain object-right"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 w-full pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium uppercase tracking-[0.1em] text-teal-muted mb-6"
          >
            AI Automation Agency
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white"
          >
            We automate.
            <br />
            You <span className="text-teal">grow</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-light-gray leading-relaxed max-w-[440px]"
          >
            Done-for-you AI systems that stop home service businesses from losing jobs to missed calls and slow follow-ups.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <CTAButton to="/contact" size="large">
              Book a Free Consultation
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
