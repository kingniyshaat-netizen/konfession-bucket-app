import type { DemoReply } from "@/lib/types";

export function ReplyCard({ reply }: { reply: DemoReply }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-muted">
        <span>{reply.type}</span>
        <span>{reply.mode}</span>
      </div>
      <p className="mt-2 text-muted">{reply.text}</p>
    </div>
  );
}
