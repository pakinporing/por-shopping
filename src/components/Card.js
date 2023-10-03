import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ productImg, productName, id, productDetail }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-[500px] h-[200px] bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
        role="button"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <div className="flex w-[full] h-[full]">
          <img
            className="w-1/2 h-full object-cover overflow-hidden"
            src={productImg}
            alt={productName}
          />
          <div className="w-1/2 flex flex-col items-start gap-2 p-[8px] overflow-hidden">
            <div className="text-xl font-bold text-blue-500">{productName}</div>

            <div className=" text-sm h-full w-full overflow-hidden whitespace-pre-wrap break-words">
              {productDetail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
