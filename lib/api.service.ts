import sql from "better-sqlite3";

import { DummyNewType } from "@/types";
import { DUMMY_NEWS } from "@/dummy-news";

// sql path relative to the root folder
const db = sql("data.db");

export async function getAllNews(): Promise<DummyNewType[]> {
  try {
    const newsList = db.prepare("SELECT * FROM news").all() as DummyNewType[];
    // simulate api call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return newsList;
  } catch (error) {
    console.error("Error obtaining news", JSON.stringify(error));
    throw error;
  }
}

export async function getNewsItem(slug: string): Promise<DummyNewType> {
  try {
    const newsItem = db
      .prepare("SELECT * FROM news WHERE slug = ?")
      .get(slug) as DummyNewType;
    // simulate api call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return newsItem;
  } catch (error) {
    console.error("Error obtaining news detail", JSON.stringify(error));
    throw error;
  }
}

export async function getLatestNews(): Promise<DummyNewType[]> {
  try {
    const latestNews = db
      .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
      .all() as DummyNewType[];
    // simulate api call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return latestNews;
  } catch (error) {
    console.error("Error obtaining latest news", JSON.stringify(error));
    throw error;
  }
}

export async function getAvailableNewsYears(): Promise<number[]> {
  try {
    const rows = db
      .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
      .all() as { year: number }[];

    const years = rows.map((row) => row.year);

    // simulate api call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return years;
  } catch (error) {
    console.error("Error obtaining latest news", JSON.stringify(error));
    throw error;
  }
}

export function getAvailableNewsMonths(year: number): number[] {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === year) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number): DummyNewType[] {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === year
  );
}

export function getNewsForYearAndMonth(
  year: number,
  month: number
): DummyNewType[] {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === year && newsMonth === month;
  });
}
