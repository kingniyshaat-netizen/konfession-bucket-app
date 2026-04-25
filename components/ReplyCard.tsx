type Props = {
  type: string;
  mode: string;
  body: string;
};

export default function ReplyCard({ type, mode, body }: Props) {
  return (
    <div className="panel">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <strong>{type}</strong>
        <span className="muted">{mode}</span>
      </div>
      <p className="muted">{body}</p>
    </div>
  );
}
