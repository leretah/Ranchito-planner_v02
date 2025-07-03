export function Dialog({ children }) { return <div>{children}</div>; }
export function DialogContent({ children }) { return <div className="p-4 border rounded bg-white shadow">{children}</div>; }
export function DialogHeader({ children }) { return <div className="font-bold mb-2">{children}</div>; }
export function DialogTitle({ children }) { return <h2 className="text-xl">{children}</h2>; }