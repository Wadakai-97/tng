-- 商品情報を管理するテーブル
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '商品ID',
    name VARCHAR(255) NOT NULL COMMENT '商品名',
    description TEXT COMMENT '商品説明',
    price DECIMAL(15, 2) NOT NULL COMMENT '価格',
    tax_rate DECIMAL(5, 2) NOT NULL COMMENT '税率',
    discount_rate DECIMAL(5, 2) COMMENT '割引率',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時'
) COMMENT='商品情報を管理するテーブル';

-- 請求書を管理するテーブル
CREATE TABLE invoices (
    invoice_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '請求書ID',
    invoice_date DATE NOT NULL COMMENT '請求日',
    due_date DATE NOT NULL COMMENT '支払期限',
    total_amount DECIMAL(15, 2) NOT NULL COMMENT '合計金額',
    tax_amount DECIMAL(15, 2) NOT NULL COMMENT '消費税額',
    discount_amount DECIMAL(15, 2) COMMENT '割引額',
    status VARCHAR(50) NOT NULL COMMENT 'ステータス',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時'
) COMMENT='請求書を管理するテーブル';