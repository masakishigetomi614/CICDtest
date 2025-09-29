import { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React TypeScript サンプルアプリ</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
}

export default App;
