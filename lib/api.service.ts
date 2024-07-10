import sql from "better-sqlite3";

import { DUMMY_NEWS } from "@/dummy-news";
import { DummyNewType } from "@/types";

// sql path relative to the root folder
const db = sql("data.db");

export function getAllNews(): DummyNewType[] {
  try {
    return db.prepare("SELECT * FROM news").all() as DummyNewType[];
  } catch (error) {
    console.error("Error obtaining meal details", JSON.stringify(error));
    throw error;
  }
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
