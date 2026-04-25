import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Konfession Bucket",
  description: "Adult confession-based interactive platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
