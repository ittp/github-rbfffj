import Link from 'next/link';
import fetch from '../fetch';

export default function Index({ stars }) {
  return (
    <div>
      <p>Next.js has {stars} ⭐️</p>
      <h1>{datad}</h1>
      <Link href="/preact">
        <a>How about preact?</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/ittp/openwrt');
  const json = await res.json(); // better use it inside try .. catch

  console.log(json);
  return {
    props: { datad: 1, stars: json },
  };
}
