import SingleCard from '@/components/SingleCard';

const cargarDatos = id => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then(res =>
    res.json()
  );
};

async function page({ params }) {
  const { id } = params;
  const products = await cargarDatos(id);
  return (
    <>
      <SingleCard products={products} />
    </>
  );
}

export default page;
