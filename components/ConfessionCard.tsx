import Link from "next/link";
import type { DemoPost } from "@/lib/types";

export function ConfessionCard({ post }: { post: DemoPost }) {
  return (
    <article className="panel p-5">
      <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-muted">
        <span>{post.tag}</span>
        <span>•</span>
        <span>{post.mode}</span>
      </div>
      <h3 className="mt-3 text-xl font-black">{post.title}</h3>
      <p className="mt-2 text-muted">{post.body}</p>
      <div className="mt-4 flex gap-3">
        <Link href={`/post/${post.id}`} className="btn-secondary">Open Thread</Link>
        <button className="btn-secondary">Save</button>
        <button className="btn-secondary">Report</button>
      </div>
    </article>
  );
}
