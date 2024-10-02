<script>
    import { writable, derived } from 'svelte/store';

    // サンプルの在庫データ
    const sampleInventory = [
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
    ];

    // カテゴリのリスト
    const categories = [
        '食品', '飲料', '日用品', '家電', '家具', '衣料品', '書籍', '文房具', '玩具', 'スポーツ用品', 
        'アウトドア用品', '化粧品', '医薬品', 'ペット用品', '園芸用品', '自動車用品', 'オフィス用品', 
        'キッチン用品', 'バス用品', 'トイレ用品'
    ];

    // Svelteのストア
    const inventory = writable(sampleInventory);
    const searchName = writable('');
    const searchCategory = writable('');
    const isSearchVisible = writable(true);

    // フィルタリング処理
    const filteredInventory = derived(
        [inventory, searchName, searchCategory],
        ([$inventory, $searchName, $searchCategory]) =>
            $inventory.filter(item =>
                item.product_name.includes($searchName) && item.category.includes($searchCategory)
            )
    );

    // 検索条件の表示/非表示を切り替える関数
    function toggleSearchVisibility() {
        isSearchVisible.update(value => !value);
    }

    // 在庫数を変更する関数
    function updateStockQuantity(product_id, new_quantity) {
        inventory.update(items => {
            const index = items.findIndex(item => item.product_id === product_id);
            if (index !== -1) {
                items[index].stock_quantity = new_quantity;
                items[index].last_updated = new Date().toISOString().split('T')[0];
            }
            return items;
        });
    }
</script>

<style>
    .inventory-list-container {
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: #f5f5f7;
        color: #1d1d1f;
        margin-left: 10px;
        margin-right: 10px;
        min-width: 1500px;
    }
    .title {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .toggle-search-button {
        margin-bottom: 20px;
        padding: 10px 20px;
        background-color: #007aff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    }
    .toggle-search-button:hover {
        background-color: #005bb5;
    }
    .search-container.hidden {
        display: none;
    }
    .search-field {
        margin-bottom: 20px;
    }
    .search-input, .search-select {
        width: 100%;
        padding: 10px;
        border: 1px solid #d1d1d6;
        border-radius: 8px;
        font-size: 16px;
    }
    .inventory-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    .inventory-table th, .inventory-table td {
        border: 1px solid #d1d1d6;
        padding: 12px;
        text-align: left;
    }
    .inventory-table th {
        background-color: #f5f5f7;
        font-weight: 600;
    }
    .detail-button, .update-button {
        padding: 8px 16px;
        background-color: #007aff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
    .detail-button:hover, .update-button:hover {
        background-color: #005bb5;
    }
</style>

<div class="inventory-list-container">
    <h1 class="title">在庫変更</h1>
    <button on:click={toggleSearchVisibility} class="toggle-search-button">
        {#if $isSearchVisible}
            検索条件：非表示
        {:else}
            検索条件：表示
        {/if}
    </button>
    <div class="search-container" class:hidden={!$isSearchVisible}>
        <div class="search-field">
            <label for="searchName">商品名</label>
            <input type="text" id="searchName" bind:value={$searchName} class="search-input" />
        </div>
        <div class="search-field">
            <label for="searchCategory">カテゴリ</label>
            <select id="searchCategory" bind:value={$searchCategory} class="search-select">
                <option value="">すべて</option>
                {#each categories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
        </div>
    </div>
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
            {#each $filteredInventory as item}
                <tr>
                    <td>{item.product_id}</td>
                    <td>{item.product_name}</td>
                    <td>{item.category}</td>
                    <td>{item.stock_quantity}</td>
                    <td>{item.warehouse_name}</td>
                    <td>{item.last_updated}</td>
                    <td>{item.manager_name}</td>
                    <td><button class="detail-button">詳細</button></td>
                    <td>
                        <input type="number" min="0" value={item.stock_quantity} on:change={(e) => updateStockQuantity(item.product_id, e.target.value)} />
                        <button class="update-button" on:click={() => updateStockQuantity(item.product_id, item.stock_quantity)}>更新</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
