// Simple cute notebook SVG icon component
export default function NotebookIcon({ className = "w-16 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="10" y="8" width="40" height="48" rx="4" fill="#60a5fa" />
      <rect x="14" y="12" width="32" height="40" rx="2" fill="#f8fafc" />
      <path d="M18 20h24M18 28h24M18 36h24M18 44h16" stroke="#94a3b8" strokeWidth="2" />
      <rect x="10" y="8" width="6" height="48" rx="3" fill="#0ea5e9" />
    </svg>
  );
}
