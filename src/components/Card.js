import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ productImg, productName, id, productDetail }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full h-[200px] bg-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer m-2"
        role="button"
        onClick={() => {
          navigate(`/product/${productName}`);
        }}
      >
        <div className="flex w-[full] h-[full]">
          <img
            className="w-1/2 h-full object-fill overflow-hidden"
            src={productImg}
            alt={productName}
          />

          <div className="w-1/2 flex flex-col items-start gap-[1px] p-[8px] overflow-hidden justify-items-center">
            <div className="text-xl font-bold text-blue-500 overflow-hidden w-[95%]">
              {productName}
            </div>

            <div className=" text-sm h-[150px] w-full overflow-hidden whitespace-pre-wrap break-words">
              {productDetail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
