import Image from "next/image";
import { H1 } from "../components/H1";
import { P } from "../components/P";
import penzion1Jpg from "../public/penzion1.jpg";
import { create, props } from "@stylexjs/stylex";

export default function Home() {
  return (
    <>
      <H1>O Penzionu</H1>
      <P>
        Nabízíme Vám levné celoroční ubytování 5 minut od centra a Bertinných
        lázní a přibližně 10 minut od Lázní Aurora. V blízkosti je zámecký park
        a rybník Svět. V okolí je velký výběr kvalitních restaurací.
      </P>
      <P>
        Možnost venkovního posezení na terase nebo dvorku. U zadního vchodu domu
        je možnost parkování. Poskytujeme dále úschovnu kol.
      </P>
      <a href="/penzion1.jpg">
        <Image
          src={penzion1Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <P>
        Penzion má 3 dvoulúžkové pokoje, vše s možností přistýlek. Všechny
        pokoje mají vlastní sociální zařízení a další vybavení (varné konvice,
        lednici,...). Pokoj číslo 1 má částečně vybavenou kuchyňskou linku.
      </P>
      <P>Celý objekt je nekuřácký.</P>
    </>
  );
}

const styles = create({
  image: {
    display: "block",
    marginInline: "auto",
    aspectRatio: "800 / 600",
    maxWidth: "400px",
    width: "90%",
    height: "auto",
  },
});
