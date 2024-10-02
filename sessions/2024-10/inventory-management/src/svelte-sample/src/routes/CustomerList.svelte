<script>
    import { writable, derived } from 'svelte/store';

    // サンプルの顧客データ
    const sampleCustomers = [
        { id: 1, name: '山田 太郎', email: 'taro.yamada@example.com', note: '重要顧客' },
        { id: 2, name: '佐藤 花子', email: 'hanako.sato@example.com', note: '新規顧客' },
        { id: 3, name: '鈴木 次郎', email: 'jiro.suzuki@example.com', note: 'リピート顧客' },
        { id: 4, name: '田中 一郎', email: 'ichiro.tanaka@example.com', note: '新規顧客' },
        { id: 5, name: '高橋 次郎', email: 'jiro.takahashi@example.com', note: '重要顧客' },
        { id: 6, name: '伊藤 三郎', email: 'saburo.ito@example.com', note: 'リピート顧客' },
        { id: 7, name: '渡辺 四郎', email: 'shiro.watanabe@example.com', note: '新規顧客' },
        { id: 8, name: '山本 五郎', email: 'goro.yamamoto@example.com', note: '重要顧客' },
        { id: 9, name: '中村 六郎', email: 'rokuro.nakamura@example.com', note: 'リピート顧客' },
        { id: 10, name: '小林 七郎', email: 'shichiro.kobayashi@example.com', note: '新規顧客' },
        { id: 11, name: '加藤 八郎', email: 'hachiro.kato@example.com', note: '重要顧客' },
        { id: 12, name: '吉田 九郎', email: 'kuro.yoshida@example.com', note: 'リピート顧客' },
        { id: 13, name: '山口 十郎', email: 'juro.yamaguchi@example.com', note: '新規顧客' },
        { id: 14, name: '松本 十一郎', email: 'juichiro.matsumoto@example.com', note: '重要顧客' },
        { id: 15, name: '井上 十二郎', email: 'juniro.inoue@example.com', note: 'リピート顧客' },
        { id: 16, name: '木村 十三郎', email: 'jusaburo.kimura@example.com', note: '新規顧客' },
        { id: 17, name: '林 十四郎', email: 'jushiro.hayashi@example.com', note: '重要顧客' },
        { id: 18, name: '清水 十五郎', email: 'jugoro.shimizu@example.com', note: 'リピート顧客' },
        { id: 19, name: '山下 十六郎', email: 'juroku.yamashita@example.com', note: '新規顧客' },
        { id: 20, name: '森 十七郎', email: 'junana.mori@example.com', note: '重要顧客' },
    ];

    // Svelteのストア
    const customers = writable(sampleCustomers);
    const searchName = writable('');
    const searchEmail = writable('');
    const isSearchVisible = writable(true);

    // フィルタリング処理
    const filteredCustomers = derived(
        [customers, searchName, searchEmail],
        ([$customers, $searchName, $searchEmail]) =>
            $customers.filter(customer =>
                customer.name.includes($searchName) && customer.email.includes($searchEmail)
            )
    );

    // 検索条件の表示/非表示を切り替える関数
    function toggleSearchVisibility() {
        isSearchVisible.update(value => !value);
    }
</script>

<style>
    .customer-list-container {
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        background-color: #f5f5f7;
        color: #1d1d1f;
        margin-left: 10px;
        margin-right: 10px;
        min-width: 900px;
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
    .search-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #d1d1d6;
        border-radius: 8px;
        font-size: 16px;
    }
    .customer-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    .customer-table th, .customer-table td {
        border: 1px solid #d1d1d6;
        padding: 12px;
        text-align: left;
    }
    .customer-table th {
        background-color: #f5f5f7;
        font-weight: 600;
    }
    .detail-button {
        padding: 8px 16px;
        background-color: #007aff;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
    }
    .detail-button:hover {
        background-color: #005bb5;
    }
</style>

<div class="customer-list-container">
    <h1 class="title">顧客一覧</h1>
    <button on:click={toggleSearchVisibility} class="toggle-search-button">
        {#if $isSearchVisible}
            検索条件：非表示
        {:else}
            検索条件：表示
        {/if}
    </button>
    <div class="search-container" class:hidden={!$isSearchVisible}>
        <div class="search-field">
            <label for="searchName">氏名</label>
            <input type="text" id="searchName" bind:value={$searchName} class="search-input" />
        </div>
        <div class="search-field">
            <label for="searchEmail">メールアドレス</label>
            <input type="text" id="searchEmail" bind:value={$searchEmail} class="search-input" />
        </div>
    </div>
    <table class="customer-table">
        <thead>
            <tr>
                <th>顧客ID</th>
                <th>氏名</th>
                <th>メールアドレス</th>
                <th>メモ</th>
                <th>詳細</th>
            </tr>
        </thead>
        <tbody>
            {#each $filteredCustomers as customer}
                <tr>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.note}</td>
                    <td><button class="detail-button">詳細</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
