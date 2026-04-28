export function EmptyState({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="panel border-dashed p-8 text-center">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-muted">{copy}</p>
    </div>
  );
}
