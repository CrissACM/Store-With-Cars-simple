'use client';
import { saveCategory } from '@/store/miSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Imagen from './Image';

function ViewButton({ value }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const viewer = e => {
    dispatch(saveCategory(e));
    router.push('/bytype');
  };
  return (
    <div onClick={() => viewer(value.category)}>
      <Imagen products={value} />
    </div>
  );
}

export default ViewButton;
