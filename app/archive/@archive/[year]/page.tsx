import { NewsList } from "@/components";
import { getNewsForYear } from "@/lib/news.service";

export default function FilteredNewsPage({
  params,
}: {
  params: { year: string };
}) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
