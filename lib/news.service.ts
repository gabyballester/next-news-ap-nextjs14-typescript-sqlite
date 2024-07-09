import { DUMMY_NEWS } from "@/dummy-news";
import { DummyNewType } from "@/types";

export function getAllNews(): DummyNewType[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): DummyNewType[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string): number[] {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === parseInt(year, 10)) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: string): DummyNewType[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === parseInt(year, 10)
  );
}

export function getNewsForYearAndMonth(
  year: string,
  month: string
): DummyNewType[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === parseInt(year, 10) && newsMonth === parseInt(month, 10);
  });
}
