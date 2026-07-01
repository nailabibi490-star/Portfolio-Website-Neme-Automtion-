import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="w-full bg-navy">
      <div className="mx-auto max-w-[720px] px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why We Exist
          </h2>
          <div className="space-y-5 text-base text-light-gray leading-[1.8]">
            <p>
              Home service businesses lose thousands of dollars every month to missed calls, slow follow-ups, and scheduling friction. Meanwhile, the tools to fix this exist — but they're built for tech companies, not HVAC contractors or plumbing crews.
            </p>
            <p>
              NEME exists to bridge that gap. We design, build, and maintain automation systems specifically for home service businesses. No technical jargon, no steep learning curves — just systems that work in the background so you can focus on the work that matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
