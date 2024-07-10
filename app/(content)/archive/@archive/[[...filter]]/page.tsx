import { Suspense } from "react";
import { FilteredNews, FilterHeader } from "./(components)";

export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  const { filter } = params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}></Suspense> */}
      <Suspense fallback={<p>Loading news fallback...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
