import { component$, useStore, $ } from '@builder.io/qwik';
import './InventoryManagement.css';

export default component$(() => {
    // ストアの状態を定義
    const state = useStore({
        inventory: [
            { product_id: 1, product_name: '米', category: '食品', stock_quantity: 100, warehouse_name: '東京倉庫', last_updated: '2024-10-01', manager_name: '山田 太郎' },
            { product_id: 2, product_name: '水', category: '飲料', stock_quantity: 200, warehouse_name: '大阪倉庫', last_updated: '2024-10-02', manager_name: '佐藤 花子' },
            { product_id: 3, product_name: '洗剤', category: '日用品', stock_quantity: 300, warehouse_name: '名古屋倉庫', last_updated: '2024-10-03', manager_name: '鈴木 一郎' },
            { product_id: 4, product_name: '冷蔵庫', category: '家電', stock_quantity: 400, warehouse_name: '福岡倉庫', last_updated: '2024-10-04', manager_name: '田中 次郎' },
            { product_id: 5, product_name: 'ソファ', category: '家具', stock_quantity: 500, warehouse_name: '札幌倉庫', last_updated: '2024-10-05', manager_name: '高橋 三郎' },
            { product_id: 6, product_name: 'シャツ', category: '衣料品', stock_quantity: 600, warehouse_name: '仙台倉庫', last_updated: '2024-10-06', manager_name: '伊藤 四郎' },
            { product_id: 7, product_name: '小説', category: '書籍', stock_quantity: 700, warehouse_name: '広島倉庫', last_updated: '2024-10-07', manager_name: '渡辺 五郎' },
            { product_id: 8, product_name: 'ノート', category: '文房具', stock_quantity: 800, warehouse_name: '高松倉庫', last_updated: '2024-10-08', manager_name: '中村 六郎' },
            { product_id: 9, product_name: 'ぬいぐるみ', category: '玩具', stock_quantity: 900, warehouse_name: '那覇倉庫', last_updated: '2024-10-09', manager_name: '小林 七郎' },
            { product_id: 10, product_name: 'サッカーボール', category: 'スポーツ用品', stock_quantity: 1000, warehouse_name: '金沢倉庫', last_updated: '2024-10-10', manager_name: '加藤 八郎' },
            { product_id: 11, product_name: 'テント', category: 'アウトドア用品', stock_quantity: 1100, warehouse_name: '新潟倉庫', last_updated: '2024-10-11', manager_name: '吉田 九郎' },
            { product_id: 12, product_name: 'リップクリーム', category: '化粧品', stock_quantity: 1200, warehouse_name: '松山倉庫', last_updated: '2024-10-12', manager_name: '山本 十郎' },
            { product_id: 13, product_name: '風邪薬', category: '医薬品', stock_quantity: 1300, warehouse_name: '熊本倉庫', last_updated: '2024-10-13', manager_name: '松本 十一' },
            { product_id: 14, product_name: 'ドッグフード', category: 'ペット用品', stock_quantity: 1400, warehouse_name: '鹿児島倉庫', last_updated: '2024-10-14', manager_name: '井上 十二' },
            { product_id: 15, product_name: '園芸用土', category: '園芸用品', stock_quantity: 1500, warehouse_name: '長崎倉庫', last_updated: '2024-10-15', manager_name: '木村 十三' },
            { product_id: 16, product_name: 'カーナビ', category: '自動車用品', stock_quantity: 1600, warehouse_name: '岡山倉庫', last_updated: '2024-10-16', manager_name: '林 十四' },
            { product_id: 17, product_name: 'ファイル', category: 'オフィス用品', stock_quantity: 1700, warehouse_name: '静岡倉庫', last_updated: '2024-10-17', manager_name: '清水 十五' },
            { product_id: 18, product_name: 'フライパン', category: 'キッチン用品', stock_quantity: 1800, warehouse_name: '宇都宮倉庫', last_updated: '2024-10-18', manager_name: '山崎 十六' },
            { product_id: 19, product_name: 'バスタオル', category: 'バス用品', stock_quantity: 1900, warehouse_name: '前橋倉庫', last_updated: '2024-10-19', manager_name: '池田 十七' },
            { product_id: 20, product_name: 'トイレットペーパー', category: 'トイレ用品', stock_quantity: 2000, warehouse_name: '甲府倉庫', last_updated: '2024-10-20', manager_name: '橋本 十八' },
        ],
        categories: [
            '食品', '飲料', '日用品', '家電', '家具', '衣料品', '書籍', '文房具', '玩具', 'スポーツ用品', 
            'アウトドア用品', '化粧品', '医薬品', 'ペット用品', '園芸用品', '自動車用品', 'オフィス用品', 
            'キッチン用品', 'バス用品', 'トイレ用品'
        ],
        searchName: '',
        searchCategory: '',
        isSearchVisible: true,
    });

    // フィルタリング処理
    const filteredInventory = state.inventory.filter(item => 
        item.product_name.includes(state.searchName) && item.category.includes(state.searchCategory)
    );

    // 検索条件の表示/非表示を切り替える関数
    const toggleSearchVisibility = $(() => {
        state.isSearchVisible = !state.isSearchVisible;
    });

    // 在庫数を変更する関数
    const updateStockQuantity = $((product_id: number, new_quantity: number) => {
      const item = state.inventory.find(item => item.product_id === product_id);
      if (item) {
            item.stock_quantity = new_quantity;
            item.last_updated = new Date().toISOString().split('T')[0];
        }
    });

    return (
        <div class="inventory-list-container">
            <h1 class="title">在庫変更</h1>
            <button onClick$={() => toggleSearchVisibility()} class="toggle-search-button">
                {state.isSearchVisible ? '検索条件：非表示' : '検索条件：表示'}
            </button>
            {state.isSearchVisible && (
                <div class="search-container">
                    <div class="search-fields">
                        <div class="search-field">
                        <label for="searchName">商品名</label>
                            <input type="text" id="searchName" onInput$={(e) => state.searchName = (e.target as HTMLInputElement).value} class="search-input" />
                        </div>
                        <div class="search-field">
                        <label for="searchCategory">カテゴリ</label>
                            <select id="searchCategory" onChange$={(e) => state.searchCategory = (e.target as HTMLSelectElement).value} class="search-select">
                                <option value="">すべて</option>
                                {state.categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
            <table class="inventory-table">
                <thead>
                    <tr>
                        <th>商品ID</th>
                        <th>商品名</th>
                        <th>カテゴリ</th>
                        <th>在庫数</th>
                        <th>倉庫名</th>
                        <th>最終更新日時</th>
                        <th>担当者名</th>
                        <th>詳細</th>
                        <th>在庫変更</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredInventory.map(item => (
                        <tr key={item.product_id}>
                            <td>{item.product_id}</td>
                            <td>{item.product_name}</td>
                            <td>{item.category}</td>
                            <td>{item.stock_quantity}</td>
                            <td>{item.warehouse_name}</td>
                            <td>{item.last_updated}</td>
                            <td>{item.manager_name}</td>
                            <td><button class="detail-button">詳細</button></td>
                            <td>
                                <input type="number" min="0" value={item.stock_quantity} onChange$={(e) => updateStockQuantity(item.product_id, Number((e.target as HTMLInputElement).value ?? 0))} />
                                <button class="update-button" onClick$={() => updateStockQuantity(item.product_id, item.stock_quantity)}>更新</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});
