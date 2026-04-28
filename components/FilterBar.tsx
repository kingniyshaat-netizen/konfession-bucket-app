const filters = ["All", "Advice", "Support", "Shared", "Anonymous", "Named"];

export function FilterBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((label) => (
        <button key={label} className="btn-secondary text-sm">
          {label}
        </button>
      ))}
    </div>
  );
}
