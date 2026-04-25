export default function ModerationQueue() {
  return (
    <div className="grid">
      <div className="panel">
        <strong>Open</strong>
        <p className="muted">Heavy Mind post flagged for self-harm concern.</p>
      </div>
      <div className="panel">
        <strong>Under Review</strong>
        <p className="muted">Behind the Closed Door reply flagged for boundary violation.</p>
      </div>
      <div className="panel">
        <strong>Closed</strong>
        <p className="muted">Open Floor spam post removed.</p>
      </div>
    </div>
  );
}
