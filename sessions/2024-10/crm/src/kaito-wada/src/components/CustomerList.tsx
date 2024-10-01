import React, { useState, useMemo } from 'react';
import '../CustomerList.css';

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

// 顧客一覧コンポーネント
const CustomerList: React.FC = () => {
    const [customers] = useState(sampleCustomers);
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(true);

    const filteredCustomers = useMemo(() => 
        customers.filter(customer =>
            customer.name.includes(searchName) && customer.email.includes(searchEmail)
        ), [customers, searchName, searchEmail]);

    return (
        <div className="customer-list-container">
            <h1 className="title">顧客一覧</h1>
            <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="toggle-search-button">
                {isSearchVisible ? '検索条件：表示' : '検索条件：非表示'}
            </button>
            <div className={`search-container ${isSearchVisible ? 'visible' : 'hidden'}`}>
                <div className="search-field-name">
                    <label htmlFor="searchName">氏名</label>
                    <input
                        type="text"
                        id="searchName"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="search-field-email">
                    <label htmlFor="searchEmail">メールアドレス</label>
                    <input
                        type="text"
                        id="searchEmail"
                        value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>
            <table className="customer-table">
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
                    {filteredCustomers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.note}</td>
                            <td>
                                <button className="detail-button">詳細</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;