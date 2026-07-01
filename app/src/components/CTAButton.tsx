import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  variant = 'primary',
  size = 'default',
  to,
  href,
  children,
  className,
  onClick,
}: CTAButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
    'hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
    size === 'default' && 'px-8 py-3.5 text-sm',
    size === 'large' && 'px-10 py-4 text-base',
    variant === 'primary' && 'bg-teal text-white hover:shadow-teal',
    variant === 'secondary' && 'border border-teal text-teal bg-transparent hover:bg-teal/10',
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
}
