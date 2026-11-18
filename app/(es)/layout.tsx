import type { Metadata, Viewport } from "next";
import RootShell from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("es");

export const viewport: Viewport = {
  themeColor: "#040a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
