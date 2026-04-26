"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(1000px 520px at 12% 0%, rgba(255,122,24,.17), transparent 46%), radial-gradient(900px 480px at 92% 8%, rgba(223,176,106,.13), transparent 44%), linear-gradient(180deg, #090807 0%, #0d0a09 34%, #090807 100%)",
        color: "#f7efe6",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 720,
          width: "100%",
          padding: 28,
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,.10)",
          background: "rgba(255,255,255,.03)",
        }}
      >
        <div style={{ fontSize: 34, marginBottom: 10 }}>⚠️</div>
        <h1 style={{ margin: 0, fontSize: "1.4rem" }}>
          Something broke in the lounge
        </h1>
        <p style={{ margin: "12px 0 0", color: "#c7b7a6" }}>
          The page hit an error. Reset and reload the view.
        </p>
        <pre
          style={{
            marginTop: 18,
            padding: 16,
            borderRadius: 16,
            overflowX: "auto",
            background: "rgba(0,0,0,.22)",
            border: "1px solid rgba(255,255,255,.08)",
            color: "#f0cf9c",
            whiteSpace: "pre-wrap",
          }}
        >
          {error.message}
        </pre>
        <button
          onClick={reset}
          style={{
            marginTop: 18,
            minHeight: 44,
            padding: "0 16px",
            borderRadius: 999,
            border: "none",
            background: "linear-gradient(135deg,#dfb06a,#ffb15c)",
            color: "#2c1708",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Reset page
        </button>
      </div>
    </main>
  );
}
