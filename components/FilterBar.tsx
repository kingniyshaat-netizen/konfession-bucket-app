export default function FilterBar() {
  return (
    <div className="panel" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <button className="btn">All</button>
      <button className="btn">Anonymous</button>
      <button className="btn">Named</button>
      <button className="btn">Advice</button>
      <button className="btn">Support</button>
      <button className="btn">Shared Experience</button>
    </div>
  );
}
