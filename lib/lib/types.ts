export interface DemoReply {
  id: string;
  type: "advice" | "support" | "shared";
  mode: "anonymous" | "named";
  text: string;
}

export interface DemoPost {
  id: string;
  avenueSlug: string;
  title: string;
  body: string;
  mode: "anonymous" | "named";
  tag: "advice" | "support" | "shared";
  display: string;
  replies: DemoReply[];
}

export interface Avenue {
  slug: string;
  title: string;
  subtitle: string;
  purpose: string;
  tone: string;
  sensitivity: "Low" | "Medium" | "High";
}
