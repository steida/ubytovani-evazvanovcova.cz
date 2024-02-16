import { Metadata } from "next";
import { H1 } from "../../components/H1";
import { P } from "../../components/P";

export const metadata: Metadata = {
  title: "Ceník",
};

export default function Page() {
  return (
    <>
      <H1>{metadata.title?.toString()}</H1>
      <P>
        <strong>Základní ceny</strong>
        <br />
        Pokoj - 500 Kč osoba / den
        <br />
        <br />
        <strong>Další náklady</strong>
        <br />
        Pes - 70 Kč na den
        <br />
        Přistýlka - 300 Kč na den
      </P>
    </>
  );
}
