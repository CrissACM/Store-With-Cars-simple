import ViewButton from '@/components/ViewButton';
import style from './Category.module.css';

async function page() {
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then(res => res.json());

  const products = await Promise.all(
    categories.map(async category => {
      const product = await fetch(
        `https://fakestoreapi.com/products/category/${category}?limits=1`
      ).then(res => res.json());
      return {
        image: product[0].image,
        category,
      };
    })
  );

  return (
    <>
      <div className={style.columns}>
        {categories.map(value => (
          <div className={`${style.column} ${style.category}`} key={value.id}>
            {value}
          </div>
        ))}
      </div>
      <div className={style.columns}>
        {products.map(value => (
          <div className={style.column}>
            <ViewButton value={value} />
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
