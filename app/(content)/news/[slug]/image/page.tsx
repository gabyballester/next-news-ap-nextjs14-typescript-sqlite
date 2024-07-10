import { getNewsItem } from "@/lib/api.service";
import { notFound } from "next/navigation";

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const newItemSlug = params.slug;
  const newsItem = await getNewsItem(newItemSlug);

  if (!newsItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
