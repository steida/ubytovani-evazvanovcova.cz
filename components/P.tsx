import { create, props } from "@stylexjs/stylex";
import { FC, ReactNode } from "react";
import { fonts } from "../lib/Tokens.stylex";

export const P: FC<{ children: ReactNode }> = ({ children }) => {
  return <p {...props(styles.p)}>{children}</p>;
};

const styles = create({
  p: {
    fontFamily: fonts.sans,
    fontSize: "16px",
    lineHeight: "24px",
    marginBlock: 24,
    maxWidth: "90%",
    marginInline: "auto",
  },
});
