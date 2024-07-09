import Link from "next/link";

const links = [{ href: "/news", text: "News" }];

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
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
