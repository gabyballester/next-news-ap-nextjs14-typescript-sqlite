import Link from "next/link";

const links = [
  { href: "/news/first-news", text: "First News Item" },
  { href: "/news/second-news", text: "Second News Item" },
  { href: "/news/third-news", text: "Third News Item" },
];

export default function NewsPage() {
  return (
    <div id="home">
      <h1>News Page</h1>
      {links.map(({ href, text }) => (
        <Link key={href} href={href}>
          {text}
        </Link>
      ))}
    </div>
  );
}
