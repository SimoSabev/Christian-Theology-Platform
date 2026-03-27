import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Theology Study Platform",
  description: "The definitive Christian theology study platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
