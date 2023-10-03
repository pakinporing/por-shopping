import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 mt-10 mb-20">
        <img
          src="https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-400 h-500 object-cover overflow-hidden"
          alt="รูปสินค้า"
        />
        <div className="text-xl font-bold text-blue-600 overflow-hidden whitespace-pre-wrap break-words">
          ชื่อสินค้า
        </div>
        <div className="text-sm w-80 mx-auto p-[12px] overflow-hidden whitespace-pre-wrap break-words">
          รายละเอียดfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </div>

        <div className="text-xl font-bold text-black overflow-hidden whitespace-pre-wrap break-words">
          ราคา
        </div>
        <div className="flex items-center justify-space-evenly gap-8 h-full">
          <button className="cursor-pointer" onClick={handleGoBack}>
            ย้อนกลับ
          </button>
          <button className="cursor-pointer">แก้ไข</button>
        </div>
      </div>
    </>
  );
}
