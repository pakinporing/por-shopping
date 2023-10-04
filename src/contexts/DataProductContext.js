import { createContext, useState } from 'react';
import ProductImgTest from '../assets/35012cebc73b17d381928ce69f670318.jpg';

export const DataProductContext = createContext();

export default function DataProductContextProvider({ children }) {
  let productData = [
    {
      id: 1,
      productName: 'Sumsung',
      productDetail:
        'Galaxy Z Flip ของเรา ที่เล็กที่สุด พกพาง่ายกว่าเดิม สมาร์ทโฟนที่ให้ประสบการ์ณการเซลฟี่ ได้ดีที่สุดของ Samsung Galaxy จอนอกใหญ่ที่สุดของ Galaxy Z Flip',
      productImg: ProductImgTest,
      price: 20000
    },
    {
      id: 2,
      productName: 'Nokia',
      productDetail:
        'หน้าจอ TFT ขนาด 1.8 นิ้วซึ่งให้ภาพที่คมชัด สบายตา นอกจากนี้แล้วก็ยังสามารถเชื่อมต่อแบบ 4G และยังรองรับ LTE ซึ่งจะมีผลทำให้คุณภาพของเสียงนั้นคมชัดระดับ HD นั่นเองครับ ',
      productImg: ProductImgTest,
      price: 12000
    },
    {
      id: 3,
      productName: 'Iphone',
      productDetail:
        'ระบบกล้องระดับโปร  กล้องหลัก 48MP อัลตร้าไวด์ เทเลโฟโต้  ภาพถ่ายความละเอียดสูงเป็นพิเศษ (24MP และ 48MP)  ภาพถ่ายบุคคลเจเนอเรชั่นถัดไปพร้อมการควบคุมโฟกัสและระยะชัดลึก',
      productImg: ProductImgTest,
      price: 35000
    },
    {
      id: 4,
      productName: 'Xiaomi',
      productDetail:
        'bnn.in.th จำหน่ายโทรศัพท์มือถือยี่ห้อ Realme (เรียลมี) ทุกรุ่น อัปเดตใหม่ล่าสุดทุกตัว ของแท้มีประกัน รองรับ 5G และมีให้เลือกหลายรุ่น Realme 8 (5G), C25, C21, Narzo 20 Pro, Realme 7 Pro เครื่องเร็ว สเปคแรง เล่นเกมลื่น แถมกล้องเทพ ถ่ายภาพสวย ราคาถูก ',
      productImg: ProductImgTest,
      price: 18000
    }
  ];

  const [product, setProduct] = useState(productData);

  return (
    <DataProductContext.Provider value={{ product, setProduct }}>
      {children}
    </DataProductContext.Provider>
  );
}
