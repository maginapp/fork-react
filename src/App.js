import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';

function Test() {
  return <nav>Test</nav>
}

function App() {
  const [visible, setVisible] = useState(false);
  const [test, setText] = useState('');


  useEffect(() => {
    console.log('???? useEffect1')
  }, [])

  const msg = useMemo(() => {
    console.log('???? useMemo')
    return visible + ''
  }, [visible])

  console.log('???? render APP FCx');

  useEffect(() => {
    console.log('???? useEffect2', visible)
    return () => {
      console.log('???? useEffect2 destroy')
    }
  }, [visible])

  // useEffect(() => {
  //   setText(setText + '')
  //   console.log('???? useEffect3', visible)
  // }, [visible])

  // return  <div className="App" onClick={() => setVisible(bl => !bl)}>{visible + ''}</div>
  return (
    <div className="App">
      <header className="App-header">
        {visible && <Test/>}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p onClick={() => setVisible(bl => !bl)}>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          {msg}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
