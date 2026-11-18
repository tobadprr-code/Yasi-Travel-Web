import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import RootShell from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";
import { isLang } from "@/lib/i18n";

/** Solo existen /pt y /en (el español vive en la raíz). Cualquier otra ruta es 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang) || lang === "es") return {};
  return buildMetadata(lang);
}

export const viewport: Viewport = {
  themeColor: "#040a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "es") notFound();
  return <RootShell lang={lang}>{children}</RootShell>;
}
