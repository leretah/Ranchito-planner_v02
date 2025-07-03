export function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export function DialogContent({ children }) {
  return (
    <div
      className="p-4 border rounded bg-white shadow"
      onClick={e => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
export function DialogHeader({ children }) { return <div className="font-bold mb-2">{children}</div>; }
export function DialogTitle({ children }) { return <h2 className="text-xl">{children}</h2>; }