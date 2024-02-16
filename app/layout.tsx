import { create, props } from "@stylexjs/stylex";
import type { Metadata } from "next";
import Image from "next/image";
import { fonts } from "../lib/Tokens.stylex";
import headPng from "../public/head.png";
import { MainNav } from "./MainNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Ubytování v Třeboni - Eva Zvánovcová",
    default: "Ubytování v Třeboni - Eva Zvánovcová",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning {...props(styles.body)}>
        <div {...props(styles.container)}>
          <div {...props(styles.header)}>
            <Image
              src={headPng}
              alt="Ubytování v Třeboni - Eva Zvánovcová - Sokolská 36"
              {...props(styles.headerImage)}
            />
            <MainNav />
          </div>
          {children}
          <div {...props(styles.footer)}>eva.zvanovcova@email.cz</div>
        </div>
      </body>
    </html>
  );
}

const styles = create({
  body: {
    padding: 8,
    backgroundColor: "rgb(230, 200, 160)",
    backgroundImage: `url('/back.png')`,
  },
  container: {
    width: 806,
    maxWidth: "100%",
    marginInline: "auto",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "rgb(255, 180, 49)",
  },
  header: {},
  headerImage: {
    display: "block",
    aspectRatio: "802 / 178",
    width: "100%",
    height: "auto",
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    fontSize: "12px",
    fontFamily: fonts.sans,
    fontWeight: 700,
    paddingBlock: "3px",
    lineHeight: "24px",
    textAlign: "center",
  },
});
