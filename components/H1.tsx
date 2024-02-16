import { create, props } from "@stylexjs/stylex";
import { FC, ReactNode } from "react";

export const H1: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 {...props(styles.h1)}>{children}</h1>;
};

const styles = create({
  h1: {
    fontFamily: "serif",
    fontSize: "28px",
    fontStyle: "italic",
    textAlign: "center",
    marginBlock: "24px",
  },
});
