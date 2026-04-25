import Link from "next/link";
import { avenues } from "@/lib/mock-data";

export default function AvenueGrid() {
  return (
    <div className="grid-3">
      {avenues.map((avenue) => (
        <Link key={avenue.slug} href={`/avenues/${avenue.slug}`} className="panel">
          <strong>{avenue.title}</strong>
          <div className="muted" style={{ marginTop: 6 }}>{avenue.subtitle}</div>
        </Link>
      ))}
    </div>
  );
}
