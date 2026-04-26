import "./globals.css";

export const metadata = {
  title: "Konfession Bucket",
  description:
    "Adult confession-based interactive platform with topic lounges, anonymous or named posting, and structured conversation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
