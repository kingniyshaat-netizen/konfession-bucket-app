import SiteHeader from "@/components/SiteHeader";
import { samplePosts } from "@/lib/mock-data";
import ConfessionCard from "@/components/ConfessionCard";

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap grid">
        <div className="panel">
          <h2>Dashboard</h2>
          <p className="muted">Recent activity, saved posts, and quick actions live here.</p>
        </div>
        <div className="grid">
          {samplePosts.map((post) => (
            <ConfessionCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}
