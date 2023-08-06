import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <Link href='/category'>
          <button type='button'>Category</button>
        </Link>
        <Link href='/products'>
          <button type='button'>Products</button>
        </Link>
      </div>
    </main>
  );
}
