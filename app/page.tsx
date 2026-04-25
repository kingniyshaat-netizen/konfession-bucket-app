import SiteHeader from "@/components/SiteHeader";
import AvenueGrid from "@/components/AvenueGrid";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap grid" style={{ gap: 24 }}>
        <section className="panel">
          <h2>Konfession Bucket</h2>
          <p className="muted">
            Adult confession-based interaction platform with topic lounges, anonymous or named posting,
            and real conversation lanes.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a className="btn btn-primary" href="/new">Start a Konfession</a>
            <a className="btn" href="/dashboard">Go to Dashboard</a>
          </div>
        </section>

        <section>
          <h2>Topic Avenues</h2>
          <AvenueGrid />
        </section>
      </main>
    </>
  );
}
