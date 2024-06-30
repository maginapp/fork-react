import './App.css';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

function Test() {
  const [msg, setMsg] = useState('msg');

  return <div>
    <input value={msg} onChange={(e) => setMsg(e.target.value)} />
    <p>msg: {msg}</p>
  </div>
}

function App() {
  const [text, setText] = useState('text');

  return (
    <div className="App">
      <Test key={'test-state-app'} />
      <button key={'button'} onClick={() => {
        console.log('???? event App>button Onclick')
        setText(`${Math.random()}`.slice(2,10))
      }}>change text</button>
      <p>text: {text}</p>
    </div>
  );
}

export default App;
