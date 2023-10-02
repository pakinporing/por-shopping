import ProductImgTest from '../assets/35012cebc73b17d381928ce69f670318.jpg';
import Card from '../components/Card';
export default function ProductList() {
  const product = [
    {
      id: 1,
      productName: 'Sumsung',
      productDetail:
        '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
      productImg: ProductImgTest,
      price: 20000
    },
    {
      id: 2,
      productName: 'Nokia',
      productDetail:
        '2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
      productImg: ProductImgTest,
      price: 12000
    },
    {
      id: 3,
      productName: 'Iphone',
      productDetail:
        '333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333',
      productImg: ProductImgTest,
      price: 35000
    },
    {
      id: 4,
      productName: 'Xiaomi',
      productDetail:
        '4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444',
      productImg: ProductImgTest,
      price: 18000
    }
  ];

  return (
    <div
      style={{
        display: 'grid', // กำหนดให้แสดงองค์ประกอบภายในเป็นรูปแบบ Grid
        gridTemplateColumns: 'repeat(2, minmax(375px, 1fr))', // กำหนดให้มี 2 คอลัมน์ โดยแต่ละคอลัมน์มีขนาดเท่ากัน (1fr)
        gridTemplateRows: 'repeat(auto-fill, minmax(220px, 1fr))', // กำหนดให้มีแถวแนวตั้งแบบอัตโนมัติ โดยแต่ละแถวมีความสูงอย่างน้อย 220px และสามารถขยายตามพื้นที่ที่มีอยู่ (1fr)
        gridColumnGap: '10px', // เพิ่มระยะห่างระหว่างคอลัมน์เป็น 10px
        gap: '3px' // กำหนดระยะห่างระหว่างแต่ละองค์ประกอบ
      }}
    >
      {product.map((el) => (
        <Card
          productImg={el.productImg}
          productName={el.productName}
          productDetail={el.productDetail}
          key={el.id}
          id={el.id}
        />
      ))}
    </div>
  );
}
