import React from 'react';

export default function Summary({ selectedProduct, quantity }) {
  if (!selectedProduct) {
    return null;
  }

  return (
    <div>
      <h2>請求書概要</h2>
      <p>{selectedProduct.name} - 数量: {quantity}</p>
    </div>
  );
}
