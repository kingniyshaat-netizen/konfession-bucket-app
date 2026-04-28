"use client";

import { useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createBrowserSupabaseClient();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setMessage(error ? error.message : "Check your email for the magic link.");
  }

  return (
    <main className="container-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="panel w-full max-w-md p-6">
        <p className="section-kicker">Login</p>
        <h1 className="text-3xl font-black">Enter Konfession Bucket</h1>
        <form onSubmit={handleMagicLink} className="mt-6 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
          />
          <button type="submit" className="btn-primary w-full">Send magic link</button>
        </form>
        {message ? <p className="mt-4 text-sm text-muted">{message}</p> : null}
      </div>
    </main>
  );
}
