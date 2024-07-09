export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const newsId = params.id;
  return (
    <div id="home">
      <h1>News Detail Page</h1>
      <h1>News ID: {newsId}</h1>
    </div>
  );
}
