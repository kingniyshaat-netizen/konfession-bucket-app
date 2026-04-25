import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="wrap">
      <div className="panel" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div>
          <div className="muted" style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>
            Adult conversation platform
          </div>
          <h1 style={{ margin: "6px 0 0" }}>Konfession Bucket</h1>
        </div>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/new">New</Link>
          <Link href="/saved">Saved</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
