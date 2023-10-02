import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ productImg, productName, id, productDetail }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          width: '500px',
          height: '200px',
          backgroundColor: '#f2f2f2',
          //   border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}
        role="button"
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%'
          }}
        >
          <img
            src={productImg}
            style={{
              width: '50%',
              height: '100%',
              objectFit: 'cover',
              overflow: 'hidden'
            }}
            alt={productName}
          />
          <div
            style={{
              width: '50%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '8px',
              padding: '10px',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                fontSize: '18px',

                fontWeight: 'bold',
                color: 'blue'
              }}
            >
              {productName}
            </div>

            <div
              style={{
                fontSize: '12px',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word'
              }}
            >
              {productDetail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
