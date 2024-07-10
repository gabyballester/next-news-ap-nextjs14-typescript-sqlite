import sql from "better-sqlite3";

import { DummyNewType } from "@/types";

// sql path relative to the root folder
const db = sql("data.db");

export async function getAllNews(): Promise<DummyNewType[]> {
  try {
    const newsList = db.prepare("SELECT * FROM news").all() as DummyNewType[];
    return newsList;
  } catch (error) {
    console.error("Error obtaining news", JSON.stringify(error));
    throw error;
  }
}

export async function getNewsItem(slug: string): Promise<DummyNewType> {
  try {
    return db
      .prepare("SELECT * FROM news WHERE slug = ?")
      .get(slug) as DummyNewType;
  } catch (error) {
    console.error("Error obtaining news detail", JSON.stringify(error));
    throw error;
  }
}

export async function getLatestNews(): Promise<DummyNewType[]> {
  try {
    return db
      .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
      .all() as DummyNewType[];
  } catch (error) {
    console.error("Error obtaining latest news", JSON.stringify(error));
    throw error;
  }
}

export async function getAvailableNewsYears(): Promise<string[]> {
  try {
    const rows = db
      .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
      .all() as { year: string }[];

    return rows.map((row) => row.year);
  } catch (error) {
    console.error("Error obtaining latest news", JSON.stringify(error));
    throw error;
  }
}

export function getAvailableNewsMonths(year: string): string[] {
  const rows = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as { month: string }[];

  return rows.map((row) => row.month);
}

export async function getNewsByYear(year: string): Promise<DummyNewType[]> {
  try {
    return db
      .prepare(
        "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
      )
      .all(year) as DummyNewType[];
  } catch (error) {
    console.error("Error obtaining news by year", JSON.stringify(error));
    throw error;
  }
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string
): Promise<DummyNewType[]> {
  try {
    return db
      .prepare(
        "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
      )
      .all(year, month) as DummyNewType[];
  } catch (error) {
    console.error(
      "Error obtaining news by Year and Month",
      JSON.stringify(error)
    );
    throw error;
  }
}
