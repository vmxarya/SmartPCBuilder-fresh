import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartPCBuilder",
  description: "Build a compatible PC from real market data.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
