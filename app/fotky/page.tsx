import { Metadata } from "next";
import { H1 } from "../../components/H1";
import Image from "next/image";
import penzion1Jpg from "../../public/penzion1.jpg";
import penzion2Jpg from "../../public/penzion2.jpg";
import penzion3Jpg from "../../public/penzion3.jpg";
import penzion4Jpg from "../../public/penzion4.jpg";
import penzion5Jpg from "../../public/penzion5.jpg";
import penzion6Jpg from "../../public/penzion6.jpg";
import penzion7Jpg from "../../public/penzion7.jpg";
import penzion8Jpg from "../../public/penzion8.jpg";
import penzion9Jpg from "../../public/penzion9.jpg";
import penzion10Jpg from "../../public/penzion10.jpg";
import penzion11Jpg from "../../public/penzion11.jpg";
import penzion12Jpg from "../../public/penzion12.jpg";
import { create, props } from "@stylexjs/stylex";

export const metadata: Metadata = {
  title: "Fotky",
};

export default function Page() {
  return (
    <>
      <H1>{metadata.title?.toString()}</H1>
      <a href="/penzion1.jpg">
        <Image
          src={penzion1Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion2.jpg">
        <Image
          src={penzion2Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion3.jpg">
        <Image
          src={penzion3Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion4.jpg">
        <Image
          src={penzion4Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion5.jpg">
        <Image
          src={penzion5Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion6.jpg">
        <Image
          src={penzion6Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion7.jpg">
        <Image
          src={penzion7Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion8.jpg">
        <Image
          src={penzion8Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion9.jpg">
        <Image
          src={penzion9Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion10.jpg">
        <Image
          src={penzion10Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion11.jpg">
        <Image
          src={penzion11Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
      <a href="/penzion12.jpg">
        <Image
          src={penzion12Jpg}
          alt="Fotka penzionu"
          {...props(styles.image)}
        />
      </a>
    </>
  );
}

const styles = create({
  image: {
    display: "block",
    marginInline: "auto",
    maxWidth: "90%",
    height: "auto",
    marginBottom: "24px",
  },
});
