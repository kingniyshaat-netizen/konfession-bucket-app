import SiteHeader from "@/components/SiteHeader";
import { samplePosts } from "@/lib/mock-data";
import ReplyCard from "@/components/ReplyCard";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = samplePosts.find((p) => p.id === params.id);

  return (
    <>
      <SiteHeader />
      <main className="wrap grid">
        <div className="panel">
          <h2>{post?.title ?? "Post not found"}</h2>
          <p className="muted">{post?.body ?? "No post body."}</p>
        </div>

        <div className="grid">
          <ReplyCard type="Advice" mode="Named" body="This is where real replies will render." />
          <ReplyCard type="Support" mode="Anonymous" body="This thread page becomes the live conversation page." />
        </div>
      </main>
    </>
  );
}
