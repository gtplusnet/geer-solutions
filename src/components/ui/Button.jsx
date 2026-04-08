import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-darker',
  secondary:
    'bg-dark hover:bg-darker text-white',
  ghost:
    'text-primary hover:bg-primary/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', href, to, children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
