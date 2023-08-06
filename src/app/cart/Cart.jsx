'use client';

import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Cart.module.css';
import { remove } from '@/store/miSlice';

function Cart() {
  const [total, setTotal] = useState(0);
  const carts = useSelector(state => state.myValue.myCart);
  const dispatch = useDispatch();

  const calcTotal = useMemo(
    () =>
      setTotal(
        carts.reduce((accumulate, current) => accumulate + current.price, 0)
      ),
    [carts]
  );

  const deleter = (product) => {
    dispatch(remove(product))
  }

  return (
    <>
      <div>{total}</div>
      <div className={style.myCart}>
        {carts.length > 0 ? (
          carts.map(cart => (
            <div key={cart.id}>
              <img
                onClick={() => deleter(cart.product)}
                src={cart.image}
                alt={cart.title}
                height='60'
              />
            </div>
          ))
        ) : (
          <div>No products in cart...</div>
        )}
      </div>
    </>
  );
}

export default Cart;
