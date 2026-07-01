import { motion } from 'framer-motion';

const team = [
  {
    name: 'Naila Bibi',
    role: 'Client Strategy',
    bio: 'Focuses on understanding your business and designing the right automation setup for your needs.',
    photo: '/naila-bibi.jpg',
  },
  {
    name: 'Ahmad Shahzad',
    role: 'Automation Engineer',
    bio: 'Builds and maintains the systems that keep your business running 24/7.',
    photo: '/ahmad-shahzad.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-navy-panel">
      <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-teal-muted mb-3">
            Our Team
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Meet the People Behind NEME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-[3px] border-teal mb-5">
                <img
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-teal-muted mb-3">
                {member.role}
              </p>
              <p className="text-base text-light-gray leading-relaxed max-w-[320px]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
