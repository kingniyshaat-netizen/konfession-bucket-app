type Props = {
  id: string;
  title: string;
  body: string;
  avenue: string;
  mode: string;
  intent: string;
};

export default function ConfessionCard({ id, title, body, avenue, mode, intent }: Props) {
  return (
    <div className="panel">
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
        <span className="muted">{avenue}</span>
        <span className="muted">{mode}</span>
        <span className="muted">{intent}</span>
      </div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p className="muted">{body}</p>
      <a className="btn" href={`/post/${id}`} style={{ marginTop: 12 }}>Open Thread</a>
    </div>
  );
}
