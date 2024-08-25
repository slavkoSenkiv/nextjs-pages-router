import Link from 'next/link';
import { Fragment } from 'react';

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-freamwork">
            NextJs is a great freamwork
          </Link>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}
