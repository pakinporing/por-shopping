import useDataProduct from '../hooks/useDataProduct';
import Card from '../components/Card';

export default function ProductList() {
  const { product, setProduct } = useDataProduct();

  return (
    <div className="grid gap-x-10 gap-y-3  lg:grid-cols-2 w-4/5 ">
      {product
        .filter((el) => el.productName)
        .map((el) => (
          <Card
            productImg={el.productImg}
            productName={el.productName}
            productDetail={el.productDetail}
            key={el.productName}
            id={el.id}
          />
        ))}
    </div>
  );
}
