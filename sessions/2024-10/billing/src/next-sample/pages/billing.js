import React, { useState } from 'react';
import BillingForm from '../components/BillingForm';
import styles from '../styles/Billing.module.css';

export default function Billing() {
  // 提供された商品データ
  const productList = [
    { id: 1, name: '高級腕時計', description: '高品質な高級腕時計です。', unitPrice: 100000.00, taxRate: 10.00, discountRate: 5.00 },
    { id: 2, name: 'ゲーミングPC', description: '人気のあるゲーミングPCです。', unitPrice: 200000.00, taxRate: 8.00, discountRate: 10.00 },
    { id: 3, name: 'スマートフォン', description: 'お買い得なスマートフォンです。', unitPrice: 150000.00, taxRate: 5.00, discountRate: 0.00 },
    { id: 4, name: 'ノートパソコン', description: '新発売のノートパソコンです。', unitPrice: 300000.00, taxRate: 10.00, discountRate: 15.00 },
    { id: 5, name: 'ワイヤレスイヤホン', description: 'おすすめのワイヤレスイヤホンです。', unitPrice: 25000.00, taxRate: 8.00, discountRate: 5.00 },
    { id: 6, name: 'デジタルカメラ', description: '定番のデジタルカメラです。', unitPrice: 120000.00, taxRate: 5.00, discountRate: 2.00 },
    { id: 7, name: '4Kテレビ', description: '高評価の4Kテレビです。', unitPrice: 180000.00, taxRate: 10.00, discountRate: 8.00 },
    { id: 8, name: 'タブレット', description: 'リピーターの多いタブレットです。', unitPrice: 220000.00, taxRate: 8.00, discountRate: 10.00 },
    { id: 9, name: 'Bluetoothスピーカー', description: 'コストパフォーマンスの良いBluetoothスピーカーです。', unitPrice: 16000.00, taxRate: 5.00, discountRate: 0.00 },
    { id: 10, name: 'ゲーミングチェア', description: 'プレミアムなゲーミングチェアです。', unitPrice: 28000.00, taxRate: 10.00, discountRate: 12.00 },
    { id: 11, name: 'スマートウォッチ', description: 'バランスの取れたスマートウォッチです。', unitPrice: 13000.00, taxRate: 8.00, discountRate: 3.00 },
    { id: 12, name: '電子書籍リーダー', description: 'シンプルな電子書籍リーダーです。', unitPrice: 17000.00, taxRate: 5.00, discountRate: 1.00 },
    { id: 13, name: '高級ヘッドホン', description: '高級感のある高級ヘッドホンです。', unitPrice: 21000.00, taxRate: 10.00, discountRate: 7.00 },
    { id: 14, name: 'デスクトップPC', description: '使いやすいデスクトップPCです。', unitPrice: 190000.00, taxRate: 8.00, discountRate: 9.00 },
    { id: 15, name: 'スマートスピーカー', description: 'おしゃれなスマートスピーカーです。', unitPrice: 14000.00, taxRate: 5.00, discountRate: 0.00 },
    { id: 16, name: 'ゲーミングマウス', description: '機能的なゲーミングマウスです。', unitPrice: 26000.00, taxRate: 10.00, discountRate: 11.00 },
    { id: 17, name: 'ポータブルバッテリー', description: 'リーズナブルなポータブルバッテリーです。', unitPrice: 11000.00, taxRate: 8.00, discountRate: 4.00 },
    { id: 18, name: '高耐久USBケーブル', description: '耐久性のある高耐久USBケーブルです。', unitPrice: 2300.00, taxRate: 5.00, discountRate: 2.00 },
    { id: 19, name: '多機能プリンター', description: '多機能な多機能プリンターです。', unitPrice: 27000.00, taxRate: 10.00, discountRate: 6.00 },
    { id: 20, name: 'エコバッグ', description: 'エコなエコバッグです。', unitPrice: 2400.00, taxRate: 8.00, discountRate: 10.00 },
  ];

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

  const handleCalculate = () => {
    console.log('計算ボタンが押されました。');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>請求書作成</h1>
      <BillingForm
        products={products}
        onProductSelect={handleProductSelect}
        onQuantityChange={handleQuantityChange}
        onAddProduct={handleAddProduct}
        onRemoveProduct={handleRemoveProduct}
      />
      <button onClick={handleCalculate} className={styles.calculateButton}>計算</button>
    </div>
  );
}
