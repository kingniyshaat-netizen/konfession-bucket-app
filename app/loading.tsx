export default function Loading() {
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
          textAlign: "center",
          padding: 28,
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,.10)",
          background: "rgba(255,255,255,.03)",
          minWidth: 280,
        }}
      >
        <div style={{ fontSize: 34, marginBottom: 10 }}>🪣</div>
        <h1 style={{ margin: 0, fontSize: "1.25rem" }}>Loading Konfession Bucket</h1>
        <p style={{ margin: "10px 0 0", color: "#c7b7a6" }}>
          Pulling the lounge together...
        </p>
      </div>
    </main>
  );
}
