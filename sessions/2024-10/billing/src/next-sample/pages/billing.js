import React, { useState } from 'react';
import BillingForm from '../components/BillingForm';
import Summary from '../components/Summary';
import '../styles/globals.css';

export default function Billing() {
  const productList = [
    { id: 1, name: '商品A', description: '商品Aの説明', unitPrice: 1000, taxRate: 0.1, discountRate: 0.05 },
    { id: 2, name: '商品B', description: '商品Bの説明', unitPrice: 500, taxRate: 0.1, discountRate: 0.1 },
    { id: 3, name: '商品C', description: '商品Cの説明', unitPrice: 2000, taxRate: 0.08, discountRate: 0.1 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleProductSelect = (productId) => {
    const product = productList.find((item) => item.id === parseInt(productId));
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleCalculate = () => {
    console.log('計算ボタンが押されました。');
  };

  return (
    <div className="container">
      <h1>請求書作成</h1>
      <BillingForm
        productList={productList}
        selectedProduct={selectedProduct}
        onProductSelect={handleProductSelect}
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
      <button onClick={handleCalculate}>計算</button>
      <Summary selectedProduct={selectedProduct} quantity={quantity} />
    </div>
  );
}
