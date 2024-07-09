import Link from "next/link";
import { NewsList } from "@/components";
import { DummyNewType } from "@/types";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
  getAllNews,
} from "@/lib/news.service";

export default function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let subtitle;
  let news: DummyNewType[] = [];
  let links: number[] = getAvailableNewsYears();

  if (!selectedYear && !selectedMonth) {
    news = getAllNews();
    subtitle = "Filter by: Year";
  }

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
    subtitle = "Filter by: Month";
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
    subtitle = `Filtered by: Year ${selectedYear} and Month ${selectedMonth}`;
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <p>{subtitle}</p>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
