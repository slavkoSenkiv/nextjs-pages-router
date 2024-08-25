import { useRouter } from 'next/router';
// http://localhost:3000/news/smth-important
export default function DetailPage() {
  const rounter = useRouter();
  //newsId here corresponds with the fine name in square brackers
  const newsId = rounter.query.newsId;
  return <h1>The Detail Page</h1>;
}
