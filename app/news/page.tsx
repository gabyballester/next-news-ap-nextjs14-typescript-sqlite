import Link from "next/link";

const links = [
  { href: "/news/first-news", text: "First News Item" },
  { href: "/news/second-news", text: "Second News Item" },
  { href: "/news/third-news", text: "Third News Item" },
];

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        {links.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
