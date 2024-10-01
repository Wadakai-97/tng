CREATE TABLE category (
    category_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'カテゴリID',
    category_name VARCHAR(255) NOT NULL COMMENT 'カテゴリ名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='カテゴリテーブル';

CREATE TABLE manufacturer (
    manufacturer_id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'メーカーID',
    manufacturer_name VARCHAR(255) NOT NULL COMMENT 'メーカー名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='メーカーテーブル';

CREATE TABLE manager (
    manager_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '担当者ID',
    manager_name VARCHAR(255) NOT NULL COMMENT '担当者名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='担当者テーブル';

CREATE TABLE product (
    product_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '商品ID',
    product_name VARCHAR(255) NOT NULL COMMENT '商品名',
    category_id INT NOT NULL COMMENT 'カテゴリID',
    product_description TEXT COMMENT '商品説明',
    price DECIMAL(10, 2) COMMENT '価格',
    manufacturer_id INT COMMENT 'メーカーID',
    manufacture_date DATE COMMENT '製造日',
    expiration_date DATE COMMENT '有効期限',
    barcode VARCHAR(255) UNIQUE COMMENT 'バーコード',
    FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(manufacturer_id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品テーブル';

CREATE TABLE stock_entry_history (
    history_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '履歴ID',
    product_id INT NOT NULL COMMENT '商品ID',
    entry_quantity INT NOT NULL COMMENT '入庫数',
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '入庫日時',
    manager_id INT COMMENT '担当者ID',
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='入庫履歴テーブル';

CREATE TABLE stock_exit_history (
    history_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '履歴ID',
    product_id INT NOT NULL COMMENT '商品ID',
    exit_quantity INT NOT NULL COMMENT '出庫数',
    exit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '出庫日時',
    manager_id INT COMMENT '担当者ID',
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='出庫履歴テーブル';

CREATE TABLE warehouse (
    warehouse_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '倉庫ID',
    warehouse_name VARCHAR(255) NOT NULL COMMENT '倉庫名',
    address VARCHAR(255) NOT NULL COMMENT '住所',
    phone_number VARCHAR(20) COMMENT '電話番号',
    manager_id INT COMMENT '担当者ID',
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='倉庫テーブル';

CREATE TABLE product_warehouse (
    product_id INT NOT NULL COMMENT '商品ID',
    warehouse_id INT NOT NULL COMMENT '倉庫ID',
    stock_quantity INT NOT NULL COMMENT '在庫数',
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最終更新日時',
    PRIMARY KEY (product_id, warehouse_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (warehouse_id) REFERENCES warehouse(warehouse_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品倉庫テーブル';
