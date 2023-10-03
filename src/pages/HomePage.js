import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <Header />
        <div className="text-3xl font-bold text-blue-600">PRODUCTS</div>
        <ProductList />
      </div>
    </>
  );
}
