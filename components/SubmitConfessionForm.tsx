"use client";

import { useState } from "react";

export function SubmitConfessionForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        avenueSlug: "heartlines",
        mode: "anonymous",
        intent: "advice",
        title,
        body,
      }),
    });

    const data = await response.json();
    setMessage(data.message ?? data.error ?? "Submitted.");
    if (response.ok) {
      setTitle("");
      setBody("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel p-6">
      <h2 className="text-2xl font-black">New Konfession</h2>
      <div className="mt-5 grid gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What happened or what are you trying to understand?"
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Say what needs to be said."
          className="min-h-36 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
        />
        <button type="submit" className="btn-primary">Publish</button>
        {message ? <p className="text-sm text-muted">{message}</p> : null}
      </div>
    </form>
  );
}
