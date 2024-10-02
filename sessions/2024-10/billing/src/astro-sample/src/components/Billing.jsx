import React, { useState } from 'react';
import BillingForm from './BillingForm';

const productList = [
  { id: 1, name: '高級腕時計', description: '高品質な高級腕時計です。', unitPrice: 100000.0, taxRate: 10.0, discountRate: 5.0 },
  { id: 2, name: 'ゲーミングPC', description: '人気のあるゲーミングPCです。', unitPrice: 200000.0, taxRate: 8.0, discountRate: 10.0 },
  { id: 3, name: 'スマートフォン', description: 'お買い得なスマートフォンです。', unitPrice: 150000.0, taxRate: 5.0, discountRate: 0.0 },
  { id: 4, name: 'ノートパソコン', description: '新発売のノートパソコンです。', unitPrice: 300000.0, taxRate: 10.0, discountRate: 15.0 },
  { id: 5, name: 'ワイヤレスイヤホン', description: 'おすすめのワイヤレスイヤホンです。', unitPrice: 25000.0, taxRate: 8.0, discountRate: 5.0 },
  { id: 6, name: 'デジタルカメラ', description: '定番のデジタルカメラです。', unitPrice: 120000.0, taxRate: 5.0, discountRate: 2.0 },
  { id: 7, name: '4Kテレビ', description: '高評価の4Kテレビです。', unitPrice: 180000.0, taxRate: 10.0, discountRate: 8.0 },
  { id: 8, name: 'タブレット', description: 'リピーターの多いタブレットです。', unitPrice: 220000.0, taxRate: 8.0, discountRate: 10.0 },
  { id: 9, name: 'Bluetoothスピーカー', description: 'コストパフォーマンスの良いBluetoothスピーカーです。', unitPrice: 16000.0, taxRate: 5.0, discountRate: 0.0 },
  { id: 10, name: 'ゲーミングチェア', description: 'プレミアムなゲーミングチェアです。', unitPrice: 28000.0, taxRate: 10.0, discountRate: 12.0 },
  { id: 11, name: 'スマートウォッチ', description: 'バランスの取れたスマートウォッチです。', unitPrice: 13000.0, taxRate: 8.0, discountRate: 3.0 },
  { id: 12, name: '電子書籍リーダー', description: 'シンプルな電子書籍リーダーです。', unitPrice: 17000.0, taxRate: 5.0, discountRate: 1.0 },
  { id: 13, name: '高級ヘッドホン', description: '高級感のある高級ヘッドホンです。', unitPrice: 21000.0, taxRate: 10.0, discountRate: 7.0 },
  { id: 14, name: 'デスクトップPC', description: '使いやすいデスクトップPCです。', unitPrice: 190000.0, taxRate: 8.0, discountRate: 9.0 },
  { id: 15, name: 'スマートスピーカー', description: 'おしゃれなスマートスピーカーです。', unitPrice: 14000.0, taxRate: 5.0, discountRate: 0.0 },
  { id: 16, name: 'ゲーミングマウス', description: '機能的なゲーミングマウスです。', unitPrice: 26000.0, taxRate: 10.0, discountRate: 11.0 },
  { id: 17, name: 'ポータブルバッテリー', description: 'リーズナブルなポータブルバッテリーです。', unitPrice: 11000.0, taxRate: 8.0, discountRate: 4.0 },
  { id: 18, name: '高耐久USBケーブル', description: '耐久性のある高耐久USBケーブルです。', unitPrice: 2300.0, taxRate: 5.0, discountRate: 2.0 },
  { id: 19, name: '多機能プリンター', description: '多機能な多機能プリンターです。', unitPrice: 27000.0, taxRate: 10.0, discountRate: 6.0 },
  { id: 20, name: 'エコバッグ', description: 'エコなエコバッグです。', unitPrice: 2400.0, taxRate: 8.0, discountRate: 10.0 },
];

export default function Billing() {
  const [products, setProducts] = useState([{ id: '', quantity: 1, productList }]);

  const handleProductSelect = (index, productId) => {
    const newProducts = [...products];
    const product = productList.find((item) => item.id === parseInt(productId));
    newProducts[index] = { ...newProducts[index], ...product, id: productId };
    setProducts(newProducts);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newProducts = [...products];
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { id: '', quantity: 1, productList }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="container">
      <h1>請求書作成</h1>
      <BillingForm
        products={products}
        onProductSelect={handleProductSelect}
        onQuantityChange={handleQuantityChange}
        onAddProduct={handleAddProduct}
        onRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
}
