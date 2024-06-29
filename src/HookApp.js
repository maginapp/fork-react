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

function TestState() {
  const [msg, setMsg] = useState('init msg');
  const [msg1, setMsg2] = useState('init msg1');
  const [msg2, setMsg3] = useState('init msg2');
  

  console.log('???? TestState');

  // useLayoutEffect(() => {
  //   console.log('???? dispatchSetState update will setMsg')
  //   setMsg('???? bailoutHooks useLayoutEffect init', msg);
  //   // setMsg(msg);
  // }, [msg])

  // useEffect(() => {
  //   console.log('??? dispatchSetState update  not setMsg')
  //   console.log('???? bailoutHooks useLayoutEffect init', msg);
  // }, [msg])

  useEffect(() => {
    setMsg2(msg + ' ===> msg2');
    console.log('???? useEffect2 setMsg2 ==> ', msg);
    return () => {
      console.log('???? useEffect2 unmount ')
    }
  }, [msg]);

  useEffect(() => {
    setMsg3(msg + ' ===> msg3');
    console.log('???? useEffect3 setMsg3', msg);
  }, [msg]);

  useEffect(() => {
    console.log('???? just useEffect4');
  }, [msg]);

  // useEffect(() => {
  //   setMsg('???? useEffect t2 init', msg);
  // }, [msg]);
  // debugger;

  return <div key="test-state">
    <button onClick={() => setMsg(msg => {
      return msg
    })}>not change msg</button>
      <button onClick={() => setMsg(msg => {
      return msg + (Math.random() + '').slice(2,4)
    })}>change msg</button>
    <p>msg is: <code>{msg}</code></p>
  </div>
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
    console.log('???? useEffect2 ===>', visible)
    return () => {
      console.log('???? useEffect2 destroy')
    }
  }, [visible])

  useEffect(() => {
    console.log('???? useEffect3 ===>', visible)
    return () => {
      console.log('???? useEffect3 destroy')
    }
  }, [visible])

  return (
    <div className="App">
      <TestState key={'test-state-app'} />
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
