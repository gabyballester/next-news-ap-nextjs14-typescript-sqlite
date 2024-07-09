import Link from "next/link";
import { NavLink } from "./nav-link";

const links = [
  { href: "/news", text: "News" },
  { href: "/archive", text: "Archive" },
];

export const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          {links.map(({ href, text }) => (
            <li key={href}>
              <NavLink href={href}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
