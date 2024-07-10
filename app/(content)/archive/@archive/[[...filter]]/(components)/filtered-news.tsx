import { NewsList } from "@/components";
import { DummyNewType } from "@/types";
import {
  getNewsByYear,
  getNewsForYearAndMonth,
  getAllNews,
} from "@/lib/api.service";

export const FilteredNews = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  let news: DummyNewType[] = await getAllNews();

  if (year && !month) {
    news = await getNewsByYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};
