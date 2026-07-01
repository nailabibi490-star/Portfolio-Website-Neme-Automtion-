import { motion } from 'framer-motion';

export default function ExpansionNoteSection() {
  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-base text-teal-muted italic"
        >
          E-commerce and healthcare automation coming soon.
        </motion.p>
      </div>
    </section>
  );
}
