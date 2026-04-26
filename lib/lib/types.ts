export type ReplyType = "advice" | "support" | "shared";
export type DisplayMode = "anonymous" | "named";
export type SensitivityLevel = "Low" | "Medium" | "High";

export interface Reply {
  type: ReplyType;
  mode: DisplayMode;
  text: string;
}

export interface ConfessionPost {
  id: string;
  mode: DisplayMode;
  display: string;
  tag: ReplyType;
  title: string;
  body: string;
  reactions: string[];
  replies: Reply[];
}

export interface Avenue {
  id: string;
  title: string;
  subtitle: string;
  purpose: string;
  tone: string;
  sensitivity: SensitivityLevel;
  sampleTypes: string;
  posts: ConfessionPost[];
}
