import { Metadata } from "next";
import { H1 } from "../../components/H1";
import { P } from "../../components/P";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Page() {
  return (
    <>
      <H1>{metadata.title?.toString()}</H1>
      <P>
        <strong>Adresa</strong>
        <br />
        Sokolská 36, 379 01 Třeboň
        <br />
        Vjezd pro auta z ulice Vrchlického 935.
        <br />
        <br />
        <strong>Email</strong>
        <br />
        eva.zvanovcova@email.cz
        <br />
        <br />
        <strong>Telefon</strong>
        <br />
        +420 725 169 791
      </P>
    </>
  );
}
