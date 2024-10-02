<template>
  <div class="customer-list-container">
    <h1 class="title">顧客一覧</h1>
    <button @click="toggleSearchVisibility" class="toggle-search-button">
      {{ isSearchVisible ? '検索条件：表示' : '検索条件：非表示' }}
    </button>
    <div :class="['search-container', isSearchVisible ? 'visible' : 'hidden']">
      <div class="search-field-name">
        <label for="searchName">氏名</label>
        <input
          type="text"
          id="searchName"
          v-model="searchName"
          class="search-input"
        />
      </div>
      <div class="search-field-email">
        <label for="searchEmail">メールアドレス</label>
        <input
          type="text"
          id="searchEmail"
          v-model="searchEmail"
          class="search-input"
        />
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
        <tr v-for="customer in filteredCustomers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.note }}</td>
          <td>
            <button class="detail-button">詳細</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CustomerList',
  setup() {
    // 顧客データ
    const customers = ref([
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
    ]);

    // 検索状態の管理
    const searchName = ref('');
    const searchEmail = ref('');
    const isSearchVisible = ref(true);

    // 検索ボタンの表示/非表示を切り替える関数
    const toggleSearchVisibility = () => {
      isSearchVisible.value = !isSearchVisible.value;
    };

    // フィルタリングされた顧客リスト
    const filteredCustomers = computed(() =>
      customers.value.filter(customer =>
        customer.name.includes(searchName.value) && customer.email.includes(searchEmail.value)
      )
    );

    return {
      customers,
      searchName,
      searchEmail,
      isSearchVisible,
      toggleSearchVisibility,
      filteredCustomers,
    };
  },
};
</script>

<style scoped>
.customer-list-container {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.toggle-search-button {
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto 20px;
}

.toggle-search-button:hover {
  background-color: #005bb5;
}

.search-container {
  margin-bottom: 20px;
  &.visible {
    display: block;
  }
  &.hidden {
    display: none;
  }
}

.search-field-name,
.search-field-email {
  margin-bottom: 10px;
}

.search-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.customer-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.customer-table th,
.customer-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.customer-table th {
  background-color: #f4f4f4;
  font-weight: 600;
}

.detail-button {
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.detail-button:hover {
  background-color: #005bb5;
}
</style>
