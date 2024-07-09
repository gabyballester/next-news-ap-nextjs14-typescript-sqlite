import { NewsList } from "@/components";
import { getLatestNews } from "@/lib/news.service";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>

      <NewsList news={latestNews} />
    </>
  );
}
