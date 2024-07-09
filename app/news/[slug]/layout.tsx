import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function NewsDetailLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
