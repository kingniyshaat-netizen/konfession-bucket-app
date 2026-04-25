import SiteHeader from "@/components/SiteHeader";
import ModerationQueue from "@/components/ModerationQueue";

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap grid">
        <div className="panel">
          <h2>Admin Queue</h2>
          <p className="muted">Moderation review lives here.</p>
        </div>
        <ModerationQueue />
      </main>
    </>
  );
}
