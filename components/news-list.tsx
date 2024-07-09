import { DummyNewType } from "@/types";
import Link from "next/link";

export const NewsList = ({ news }: { news: DummyNewType[] }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem: DummyNewType) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
