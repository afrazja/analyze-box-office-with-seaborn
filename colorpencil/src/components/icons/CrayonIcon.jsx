// Simple cute crayon SVG icon component
export default function CrayonIcon({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 40l20-20 16 16L24 56 8 40z" fill="#34d399" />
      <path d="M24 56l4-12 8 8-12 4z" fill="#059669" />
      <path d="M28 24l8 8" stroke="#10b981" strokeWidth="3" />
    </svg>
  );
}
