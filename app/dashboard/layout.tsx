import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="container-shell py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Member dashboard</p>
            <h1 className="text-3xl font-black">Konfession Bucket</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link href="/dashboard" className="btn-secondary">Overview</Link>
            <Link href="/new" className="btn-secondary">New</Link>
            <Link href="/saved" className="btn-secondary">Saved</Link>
            <Link href="/reports" className="btn-secondary">Reports</Link>
          </nav>
        </div>
        {children}
      </div>
    </main>
  );
}
