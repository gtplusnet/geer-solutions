export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-border/50 p-6 ${
        hover ? 'hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
