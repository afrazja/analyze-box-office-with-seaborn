// Simple cute eraser SVG icon component
export default function EraserIcon({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 42l18-18a6 6 0 018.49 0L56 41.5 42 56 12 42z" fill="#fb7185" />
      <path d="M24 54l6-6 12 8H28a6 6 0 01-4-2z" fill="#93c5fd" />
      <path d="M40 24l8 8" stroke="#f43f5e" strokeWidth="3" />
    </svg>
  );
}
