-- 顧客情報を管理するテーブル
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '顧客ID',
    name VARCHAR(255) NOT NULL COMMENT '氏名',
    email VARCHAR(255) NOT NULL COMMENT 'メールアドレス',
    phone_number VARCHAR(20) COMMENT '電話番号',
    date_of_birth DATE COMMENT '生年月日',
    gender ENUM('男性', '女性', 'その他') COMMENT '性別',
    marital_status ENUM('独身', '既婚', '離婚', '未亡人') COMMENT '婚姻状況',
    number_of_children INT COMMENT '子供の数',
    annual_income DECIMAL(15, 2) COMMENT '年収',
    education_level VARCHAR(255) COMMENT '学歴',
    loyalty_points INT COMMENT 'ロイヤルティポイント',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
    UNIQUE (email) COMMENT 'メールアドレスの一意性'
) COMMENT='顧客情報を管理するテーブル';

-- 顧客の連絡先情報を管理するテーブル
CREATE TABLE customer_contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '連絡先ID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    contact_info VARCHAR(500) COMMENT '連絡先',
    address VARCHAR(500) COMMENT '住所',
    phone_number VARCHAR(20) COMMENT '電話番号',
    email VARCHAR(255) COMMENT 'メールアドレス',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客の連絡先情報を管理するテーブル';

-- 顧客の職業情報を管理するテーブル
CREATE TABLE customer_occupations (
    occupation_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '職業ID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    occupation VARCHAR(255) COMMENT '職業',
    company_name VARCHAR(255) COMMENT '会社名',
    company_address VARCHAR(500) COMMENT '会社住所',
    website VARCHAR(255) COMMENT 'ウェブサイト',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客の職業情報を管理するテーブル';

-- 顧客のソーシャルメディア情報を管理するテーブル
CREATE TABLE customer_social_media (
    social_media_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'ソーシャルメディアID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    social_media_handles JSON COMMENT 'ソーシャルメディアハンドル',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客のソーシャルメディア情報を管理するテーブル';

-- 顧客の好み情報を管理するテーブル
CREATE TABLE customer_preferences (
    preference_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '好みID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    preferences JSON COMMENT '顧客の好み',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客の好み情報を管理するテーブル';

-- 顧客の購入履歴を管理するテーブル
CREATE TABLE customer_purchase_history (
    purchase_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '購入履歴ID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    purchase_history LONGTEXT COMMENT '購入履歴',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客の購入履歴を管理するテーブル';

-- 顧客のお気に入り商品を管理するテーブル
CREATE TABLE customer_favorite_products (
    favorite_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'お気に入り商品ID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    favorite_products JSON COMMENT 'お気に入り商品',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客のお気に入り商品を管理するテーブル';

-- 顧客に関連するメモを管理するテーブル
CREATE TABLE customer_notes (
    note_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'メモID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    note LONGTEXT COMMENT 'メモ内容',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客に関連するメモを管理するテーブル';

-- 顧客に関連するリマインダーを管理するテーブル
CREATE TABLE customer_reminders (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'リマインダーID',
    customer_id INT NOT NULL COMMENT '顧客ID',
    reminder LONGTEXT COMMENT 'リマインダー内容',
    reminder_date DATE COMMENT 'リマインダー日付',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '作成日時',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
) COMMENT='顧客に関連するリマインダーを管理するテーブル';

-- インデックスの作成
CREATE INDEX idx_customer_name ON customers(name) COMMENT '氏名インデックス';
CREATE INDEX idx_customer_email ON customers(email) COMMENT 'メールアドレスインデックス';
CREATE INDEX idx_customer_phone_number ON customers(phone_number) COMMENT '電話番号インデックス';
