import SiteHeader from "@/components/SiteHeader";

export default function SavedPage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <div className="panel">
          <h2>Saved Posts</h2>
          <p className="muted">Bookmarked confessions will appear here.</p>
        </div>
      </main>
    </>
  );
}
