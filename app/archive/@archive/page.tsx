import { getAvailableNewsYears } from "@/lib/news.service";
import Link from "next/link";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {years.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
