import { AvenueTile } from "@/components/avenue-tile";
import { ConfessionCard } from "@/components/confession-card";
import { avenues, posts } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main>
      <section className="container-shell py-20">
        <p className="section-kicker">Adult confession platform</p>
        <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em]">
          Confessions, burdens, warnings, lessons, regrets, and truth.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-muted">
          Konfession Bucket gives adults structured topic lounges instead of one chaotic feed.
        </p>
      </section>

      <section className="container-shell pb-16">
        <p className="section-kicker">Avenues</p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {avenues.map((avenue) => (
            <AvenueTile key={avenue.slug} slug={avenue.slug} title={avenue.title} subtitle={avenue.subtitle} />
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <p className="section-kicker">Recent konfesions</p>
        <div className="grid gap-5 xl:grid-cols-2">
          {posts.map((post) => (
            <ConfessionCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
