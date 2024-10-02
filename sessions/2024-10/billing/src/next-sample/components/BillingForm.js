import React from 'react';

export default function BillingForm({ productList, selectedProduct, onProductSelect, quantity, onQuantityChange }) {
  return (
    <div>
      <label>
        商品を選択:
        <select onChange={(e) => onProductSelect(e.target.value)} defaultValue="">
          <option value="" disabled>商品を選択してください</option>
          {productList.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      {selectedProduct && (
        <div style={{ marginTop: '20px' }}>
          <p>商品名: {selectedProduct.name}</p>
          <p>説明: {selectedProduct.description}</p>
          <p>単価: {selectedProduct.unitPrice}円</p>
          <p>税率: {selectedProduct.taxRate * 100}%</p>
          <p>割引率: {selectedProduct.discountRate * 100}%</p>
          <label>
            数量:
            <select value={quantity} onChange={(e) => onQuantityChange(parseInt(e.target.value))}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </div>
  );
}
