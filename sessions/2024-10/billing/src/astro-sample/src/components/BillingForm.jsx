import React from 'react';
import styles from '../styles/BillingForm.module.css';

export default function BillingForm({ products, onProductSelect, onQuantityChange, onAddProduct, onRemoveProduct }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.th} ${styles.selectColumn}`}>商品を選択</th>
            <th className={`${styles.th} ${styles.descriptionColumn}`}>説明</th>
            <th className={`${styles.th} ${styles.priceColumn}`}>単価</th>
            <th className={`${styles.th} ${styles.taxColumn}`}>税率</th>
            <th className={`${styles.th} ${styles.discountColumn}`}>割引率</th>
            <th className={`${styles.th} ${styles.quantityColumn}`}>数量</th>
            <th className={`${styles.th} ${styles.actionColumn}`}>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className={styles.row}>
              <td className={`${styles.td} ${styles.selectColumn}`}>
                <select
                  className={styles.select}
                  onChange={(e) => onProductSelect(index, e.target.value)}
                  value={product.id || ''}
                >
                  <option value="" disabled>商品を選択してください</option>
                  {product.productList.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className={`${styles.td} ${styles.descriptionColumn}`}>
                {product.id ? product.description : '---'}
              </td>
              <td className={`${styles.td} ${styles.priceColumn}`}>
                {product.id ? `${product.unitPrice}円` : '---'}
              </td>
              <td className={`${styles.td} ${styles.taxColumn}`}>
                {product.id ? `${product.taxRate}%` : '---'}
              </td>
              <td className={`${styles.td} ${styles.discountColumn}`}>
                {product.id ? `${product.discountRate}%` : '---'}
              </td>
              <td className={`${styles.td} ${styles.quantityColumn}`}>
                <select
                  className={styles.select}
                  value={product.quantity}
                  onChange={(e) => onQuantityChange(index, parseInt(e.target.value))}
                  disabled={!product.id}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td className={`${styles.td} ${styles.actionColumn}`}>
                <button onClick={() => onRemoveProduct(index)} className={styles.button}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAddProduct} className={styles.addButton}>＋ 商品を追加</button>
    </div>
  );
}
