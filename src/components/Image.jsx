'use client';
import Image from 'next/image';

const loader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const Imagen = ({ products }) => {
  return (
    <>
      <Image
        loader={loader}
        width={150}
        height={200}
        src={products.image}
        alt={products.title}
      />
    </>
  );
};

export default Imagen;
