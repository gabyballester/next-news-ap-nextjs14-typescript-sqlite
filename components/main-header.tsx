import Link from "next/link";

const links = [
  { href: "/", text: "Home" },
  { href: "/news", text: "News" },
];

export const MainHeader = () => {
  return (
    <header>
      <ul>
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
