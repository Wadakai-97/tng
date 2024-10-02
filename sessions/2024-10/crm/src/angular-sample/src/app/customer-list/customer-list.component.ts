import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

interface Customer {
  id: number;
  name: string;
  email: string;
  note: string;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})

export class CustomerListComponent {
  customers: Customer[] = [
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
  searchName: string = '';
  searchEmail: string = '';
  isSearchVisible: boolean = true;

  get filteredCustomers() {
    return this.customers.filter(customer =>
      customer.name.includes(this.searchName) && customer.email.includes(this.searchEmail)
    );
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
}
