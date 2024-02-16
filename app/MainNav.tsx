"use client";

import { create, props } from "@stylexjs/stylex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { fonts } from "../lib/Tokens.stylex";

export const MainNav: FC = () => {
  return (
    <div {...props(styles.mainNav)}>
      <div {...props(styles.links)}>
        <MainNavLink href="/" title="O penzionu" />
        <MainNavLink href="/cenik" title="Ceník" />
        <MainNavLink href="/fotky" title="Fotky" />
        <MainNavLink href="/kontakt" title="Kontakt" />
        <MainNavLink href="/sluzby" title="Služby" />
      </div>
    </div>
  );
};

const MainNavLink: FC<{ href: string; title: string }> = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      {...props([styles.mainNavLink, pathname === href && styles.active])}
      href={href}
    >
      {title}
    </Link>
  );
};

const styles = create({
  mainNav: {
    backgroundColor: "black",
    padding: 10,
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 340,
  },
  mainNavLink: {
    color: "white",
    fontFamily: fonts.sans,
    fontSize: "13px",
    fontWeight: 700,
    textDecoration: "none",
    textWrap: "nowrap",
  },
  active: {
    textDecoration: "underline",
  },
});
