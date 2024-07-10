import { NewsList } from "@/components";
import { getLatestNews } from "@/lib/api.service";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>

      <NewsList news={latestNews} />
    </>
  );
}
