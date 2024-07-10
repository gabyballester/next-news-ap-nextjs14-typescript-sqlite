import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/api.service";
import { ModalBackdrop } from "@/components";

export default async function InterceptedImageWithModalPage({
  params,
}: {
  params: { slug: string };
}) {
  const newItemSlug = params.slug;
  const newsItem = await getNewsItem(newItemSlug);

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
