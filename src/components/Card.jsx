import Link from 'next/link';
import style from './Card.module.css';
import Imagen from './Image';

function Card({ products }) {
  return (
    <>
      <div className={style.product}>
        <div className='name'>{products.title}</div>
        <div className='price'>{products.price}</div>
        <div className='image'>
          <Imagen products={products} />
        </div>
        <div className='ver'>
          <Link href={`/products/${products.id}`}>
            <button type='button'>Ver</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
