## 3. 請求管理システム

### 企業名
クラウド会計ソリューションズ

### システム名
クラウドビル

### システム概要
クラウドビルは、クラウド会計ソリューションズが提供する複雑な計算式の実装力を身につけるための請求管理システムです。  
このシステムは、消費税計算だけでなく、割引計算や複数税率の適用など、複雑な計算ロジックを実装することで、計算処理のスキルを向上させることができます。
学習用のため、実際には顧客情報など不足している情報、設定はご自身で考えて追加してください。

### 実装画面
- **請求書作成画面**: 
  - **数量の設定**: 各商品の数量を設定して、請求情報を自動計算します。

### 計算ロジックの詳細
- **消費税計算**: 
  - 各商品の単価に数量を掛けた金額に税率を適用し、消費税額を計算します。
  - 例: 単価が1000円、数量が2、税率が10%の場合、消費税額は1000円 * 2 * 0.10 = 200円となります。
- **割引計算**: 
  - 各商品の単価に数量を掛けた金額に割引率を適用し、割引額を計算します。
  - 例: 単価が1000円、数量が2、割引率が5%の場合、割引額は1000円 * 2 * 0.05 = 100円となります。

### 表示項目
- **表上部**:
  「計算」ボタン
- **表項目**: 
  商品名、商品説明、単価、税率、割引率、数量（プルダウン選択）

### 作成すべき結果
- **請求データ作成**:
  商品情報、合計金額、消費税額、割引額、支払期限、ステータスを含む請求データを作成します。

### 実装難易度
中級者向け

### ディレクトリ名
billing