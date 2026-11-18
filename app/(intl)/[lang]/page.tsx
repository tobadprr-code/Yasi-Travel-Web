import { notFound } from "next/navigation";
import Site from "@/components/Site";
import { isLang } from "@/lib/i18n";

/** Portugués (/pt) e inglés (/en). */
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang) || lang === "es") notFound();
  return <Site lang={lang} />;
}
