import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'navy' | 'navy-panel';
  animate?: boolean;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  background = 'navy',
  animate = true,
  id,
}: SectionWrapperProps) {
  const bgClass = background === 'navy-panel' ? 'bg-navy-panel' : 'bg-navy';

  const content = (
    <div className={cn('w-full', bgClass, className)} id={id}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      className={cn('w-full', bgClass, className)}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </motion.div>
  );
}
