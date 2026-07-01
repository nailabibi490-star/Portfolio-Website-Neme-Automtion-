import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naila@nemeautomation.com',
    href: 'mailto:naila@nemeautomation.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'See Profile',
    href: 'https://www.linkedin.com/in/nailabibi?utm_source=share_via&utm_content=profile&utm_medium=member_android',
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function ContactDetailsSection() {
  return (
    <section className="w-full bg-navy-panel">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px] mx-auto"
        >
          {contacts.map((contact) => (
            <motion.div
              key={contact.label}
              variants={itemVariants}
              className="bg-navy rounded-xl p-6 text-center"
            >
              <contact.icon className="w-6 h-6 text-teal mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-sm text-teal-muted mb-1">{contact.label}</p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="text-base text-white hover:text-teal-muted transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-base text-white">{contact.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
