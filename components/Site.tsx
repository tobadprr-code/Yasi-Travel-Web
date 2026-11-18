import { getDict, type Lang } from "@/lib/i18n";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MarqueeBand from "./MarqueeBand";
import Services from "./Services";
import Packages from "./Packages";
import Builder from "./Builder";
import Fleet from "./Fleet";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

/** La página completa en un idioma. El orden de las secciones es este. */
export default function Site({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <>
      <Navbar t={t} lang={lang} />
      <main id="main">
        <Hero t={t} />
        <MarqueeBand t={t} />
        <Services t={t} />
        <Packages t={t} />
        <Builder t={t} lang={lang} />
        <Fleet t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat t={t} />
    </>
  );
}
