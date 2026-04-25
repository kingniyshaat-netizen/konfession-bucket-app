import SiteHeader from "@/components/SiteHeader";
import { avenues, samplePosts } from "@/lib/mock-data";
import ConfessionCard from "@/components/ConfessionCard";
import FilterBar from "@/components/FilterBar";

export default function AvenuePage({ params }: { params: { slug: string } }) {
  const avenue = avenues.find((a) => a.slug === params.slug);
  const posts = samplePosts.filter((p) => p.avenue === params.slug);

  return (
    <>
      <SiteHeader />
      <main className="wrap grid">
        <div className="panel">
          <h2>{avenue?.title ?? "Avenue"}</h2>
          <p className="muted">{avenue?.subtitle ?? "Topic feed"}</p>
        </div>
        <FilterBar />
        <div className="grid">
          {posts.map((post) => (
            <ConfessionCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}
