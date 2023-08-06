'use client';

import { buy } from '@/store/miSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Imagen from './Image';

function SingleCard({ products }) {
  const dispatch = useDispatch();
  const acquire = products => {
    dispatch(
      buy({
        product: products.id,
        price: products.price,
        image: products.image,
      })
    );
  };

  return (
    <>
      <div>{products.title}</div>
      <div>{products.price}$</div>
      <div>{products.description}</div>
      <div>{products.category}</div>
      <div>
        {products.rating.rate} ({products.rating.count})
      </div>
      <div>
        <Imagen products={products} />
      </div>
      <div>
        <button type='button' onClick={() => acquire(products)}>
          Comprar
        </button>
        <Link href='/products'>
          <button type='button'>Volver</button>
        </Link>
      </div>
    </>
  );
}

export default SingleCard;
