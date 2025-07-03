export function Card({ children, className }) {
  return <div className={`rounded border border-gray-300 ${className}`}>{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}