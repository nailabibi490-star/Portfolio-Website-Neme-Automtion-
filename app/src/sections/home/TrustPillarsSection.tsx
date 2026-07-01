import { motion } from 'framer-motion';
import { PhoneOff, Wrench, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: PhoneOff,
    title: 'Missed-Call Recovery',
    desc: 'Never lose a job to a call that went unanswered.',
  },
  {
    icon: Wrench,
    title: 'Done-For-You & Maintained',
    desc: 'We build it, we maintain it monthly. Nothing for you to manage.',
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-Ready (Coming Soon)',
    desc: 'Built with healthcare-grade data security in mind as we expand.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function TrustPillarsSection() {
  return (
    <section className="w-full bg-navy border-t border-teal/20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="bg-navy-panel rounded-2xl p-8"
            >
              <pillar.icon className="w-8 h-8 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-light-gray leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
