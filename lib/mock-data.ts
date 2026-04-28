import type { Avenue, DemoPost } from "@/lib/types";

export const avenues: Avenue[] = [
  {
    slug: "heartlines",
    title: "Heartlines",
    subtitle: "Love / relationships",
    purpose: "Relationship confession and discussion.",
    tone: "Intimate, conflicted, reflective.",
    sensitivity: "Medium",
  },
  {
    slug: "parent-time",
    title: "Parent Time",
    subtitle: "Parenting",
    purpose: "Parenting burdens, guilt, reflection.",
    tone: "Tired, honest, caring.",
    sensitivity: "Medium",
  },
  {
    slug: "spiritual-lane",
    title: "Spiritual Lane",
    subtitle: "Religion / spirituality",
    purpose: "Belief conflict and spiritual testimony.",
    tone: "Reflective, searching, sincere.",
    sensitivity: "Medium",
  },
  {
    slug: "heavy-mind",
    title: "Heavy Mind",
    subtitle: "Mental burden",
    purpose: "Mental load and thought burden lane.",
    tone: "Weighted, inward, honest.",
    sensitivity: "High",
  },
];

export const posts: DemoPost[] = [
  {
    id: "post-1",
    avenueSlug: "heartlines",
    title: "I keep pulling away when things get serious.",
    body: "Every time a relationship starts feeling real, I start acting distant. I do not know if I am protecting myself or sabotaging something good.",
    mode: "anonymous",
    tag: "advice",
    display: "Anonymous",
    replies: [
      {
        id: "reply-1",
        type: "advice",
        mode: "named",
        text: "Pay attention to the moment you start feeling unsafe.",
      },
      {
        id: "reply-2",
        type: "support",
        mode: "anonymous",
        text: "A lot of people shut down when closeness gets real.",
      },
    ],
  },
  {
    id: "post-2",
    avenueSlug: "parent-time",
    title: "I love my children, but I am exhausted.",
    body: "Parenting feels nonstop and I barely recognize myself outside of responsibility anymore.",
    mode: "named",
    tag: "support",
    display: "AshRiver",
    replies: [
      {
        id: "reply-3",
        type: "support",
        mode: "anonymous",
        text: "You are allowed to be tired and still be a loving parent.",
      },
    ],
  },
];
