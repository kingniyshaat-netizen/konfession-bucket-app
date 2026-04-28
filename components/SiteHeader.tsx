import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold to-amber-500 text-black font-black">
            🪣
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Standalone product</p>
            <h1 className="text-base font-bold">Konfession Bucket</h1>
          </div>
        </Link>

        <nav className="hidden gap-4 text-sm text-muted md:flex">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/new">New</Link>
          <Link href="/saved">Saved</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="flex gap-3">
          <Link href="/login" className="btn-secondary">Login</Link>
          <Link href="/signup" className="btn-primary">Join</Link>
        </div>
      </div>
    </header>
  );
}
