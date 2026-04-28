import Link from "next/link";

export function AvenueTile({ slug, title, subtitle }: { slug: string; title: string; subtitle: string }) {
  return (
    <Link href={`/avenues/${slug}`} className="panel block p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
    </Link>
  );
}
