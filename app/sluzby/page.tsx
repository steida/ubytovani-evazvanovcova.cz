import { Metadata } from "next";
import { H1 } from "../../components/H1";
import { P } from "../../components/P";

export const metadata: Metadata = {
  title: "Služby",
};

export default function Page() {
  return (
    <>
      <H1>{metadata.title?.toString()}</H1>
      <P>
        Penzion nabízí možnost zajištění koupelí, masáží, kosmetiky, pedikúry a
        pobytu v solné jeskyni.
      </P>
    </>
  );
}
