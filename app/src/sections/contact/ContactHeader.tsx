import { motion } from 'framer-motion';

export default function ContactHeader() {
  return (
    <section className="w-full bg-navy pt-32 pb-8 sm:pt-40 sm:pb-12">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-light-gray max-w-[560px] mx-auto">
            We help home services businesses stop losing jobs to missed calls and slow follow-ups. Book a quick call — no pitch, no pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
