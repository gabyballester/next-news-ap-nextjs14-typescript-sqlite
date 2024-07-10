import Link from "next/link";

import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
} from "@/lib/api.service";

export const FilterHeader = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}) => {
  const availableYears = await getAvailableNewsYears();
  const availableMonths = year ? getAvailableNewsMonths(year) : [];
  let links: string[] = availableYears;
  let title = "Select the year";

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Incorrect filters.");
  }

  if (year && !month) {
    title = "Select the month";
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    title = `Selected Year: ${year} and Month: ${month}`;
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <p>{title}</p>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
