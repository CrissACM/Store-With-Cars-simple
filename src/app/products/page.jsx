import Card from '@/components/Card';
import Link from 'next/link';
import style from './Products.module.css';

const cargarDatos = () => {
  return fetch('https://fakestoreapi.com/products').then(res => res.json());
};

export default async function page() {
  const products = await cargarDatos();

  return (
    <>
      <div className={style.products}>
        {products.map(product => (
          <Card products={product} />
        ))}
      </div>
      <Link href='/products'>
        <button type='button'>Volver</button>
      </Link>
    </>
  );
}
