// Component Counter - Đếm số lần click
// Sử dụng useState hook để quản lý state

import { useState } from 'react';
import './Counter.css';

function Counter() {
  // Khai báo state với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm xử lý sự kiện click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h2>Component Counter</h2>
      <p>Bạn đã click: {count} lần</p>
      <button onClick={handleClick}>
        Click để tăng
      </button>
    </div>
  );
}

export default Counter;

