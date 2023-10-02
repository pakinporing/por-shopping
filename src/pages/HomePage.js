import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function HomePage() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <Header />
        <div
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#157696'
          }}
        >
          PRODUCTS
        </div>
        <ProductList />
      </div>
    </>
  );
}
