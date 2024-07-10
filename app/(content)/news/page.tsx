import { NewsList } from "@/components";
import { getAllNews } from "@/lib/api.service";

export default async function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
