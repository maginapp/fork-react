import './App.css';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

function Test() {
  useEffect(() => {
    console.log('???? useEffect0 children')
    return () => {
      console.log('???? useEffect0 children destroy')
    }
  }, [])

  return <nav>Test</nav>
}

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('???? useEffect1')
  }, [])

  const msg = useMemo(() => {
    console.log('???? useMemo')
    return visible + ''
  }, [visible])

  console.log('???? render APP FCx');

  useLayoutEffect(() => {
    console.log('???? useLayoutEffect')
  }, [])

  useEffect(() => {
    console.log('???? useEffect2', visible)
    return () => {
      console.log('???? useEffect2 destroy')
    }
  }, [visible])

  useEffect(() => {
    console.log('???? useEffect3', visible)
    return () => {
      console.log('???? useEffect3 destroy')
    }
  }, [visible])

  return (
    <div className="App">
      <header className="App-header">
        {visible && <Test/>}
        <p onClick={() => setVisible(bl => !bl)}>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
