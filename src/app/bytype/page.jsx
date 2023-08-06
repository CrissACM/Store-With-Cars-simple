'use client';

import Card from '@/components/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../products/Products.module.css';

function page() {
  const category = useSelector(state => state.myValue.category);
  const [content, setContent] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setContent(() =>
      data.map(value => <Card key={value.id} products={value} />));
    }
    getData();
  }, [category]);

  return (
    <>
      <div className={style.products}>{content}</div>
    </>
  );
}

export default page;
