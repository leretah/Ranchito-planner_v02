export function Textarea({ value, onChange, placeholder }) {
  return <textarea value={value} onChange={onChange} placeholder={placeholder} className="border px-2 py-1 rounded w-full" />;
}