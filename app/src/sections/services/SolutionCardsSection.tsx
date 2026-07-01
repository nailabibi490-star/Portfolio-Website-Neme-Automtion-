import { motion } from 'framer-motion';
import { Phone, Zap, CalendarCheck } from 'lucide-react';

const solutions = [
  {
    icon: Phone,
    title: 'After-Hours Call Recovery',
    desc: 'Calls that come in after hours get answered and logged automatically, so no job is lost overnight.',
  },
  {
    icon: Zap,
    title: 'Instant Lead Follow-Up',
    desc: 'New leads get a fast automatic response instead of waiting hours for a callback.',
  },
  {
    icon: CalendarCheck,
    title: 'Automated Booking & Scheduling',
    desc: 'Jobs get booked and confirmed without back-and-forth phone tag.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
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

export default function SolutionCardsSection() {
  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-navy-panel rounded-[20px] p-10 border-l-[3px] border-teal"
            >
              <solution.icon className="w-7 h-7 text-teal mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-base text-light-gray leading-relaxed">
                {solution.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
