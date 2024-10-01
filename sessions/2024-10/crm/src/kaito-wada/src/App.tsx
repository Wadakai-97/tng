import React from 'react';
import CustomerList from './components/CustomerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomerList /> {/* 顧客一覧コンポーネントを表示 */}
    </div>
  );
}

export default App;