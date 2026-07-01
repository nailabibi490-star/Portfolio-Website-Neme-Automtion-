import { motion } from 'framer-motion';

const industries = [
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Landscaping',
  'E-commerce',
  'Healthcare',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

export default function IndustriesSection() {
  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal-muted mb-4">
            Industries We Serve
          </p>
          <p className="text-lg text-light-gray max-w-[700px] mx-auto mb-8">
            Built for HVAC, plumbing, electrical, roofing & landscaping — expanding into e-commerce and healthcare.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={badgeVariants}
              className="px-4 py-1.5 rounded-full text-[13px] font-medium bg-teal/15 text-teal"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
