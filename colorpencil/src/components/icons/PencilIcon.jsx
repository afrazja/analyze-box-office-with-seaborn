// Simple cute pencil SVG icon component
export default function PencilIcon({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 56l8-2 30-30-6-6-30 30-2 8z" fill="#f97316" />
      <path d="M46 16l4-4a4 4 0 015.66 0l2.34 2.34a4 4 0 010 5.66l-4 4-8-8z" fill="#facc15" />
      <path d="M10 54l2-6 6 6-8 0z" fill="#f1f5f9" />
      <path d="M18 48l-4 4 6 6 4-4-6-6z" fill="#e11d48" />
      <path d="M40 20l4 4" stroke="#fb923c" strokeWidth="3" />
    </svg>
  );
}
