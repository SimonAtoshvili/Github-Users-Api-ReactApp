import { useEffect, useState } from 'react';
import First from './First';
import Second from './Second';
import ThirdLight from './ThirdLight';

function App() {
  const [mode, setMode] = useState(true);
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState("octocat");
  let [info, setInfo] = useState("");
  let [ok, setOk] = useState(true)

  useEffect(() => {
    async function foo() {
      let response = await fetch(`https://api.github.com/users/${target}`);
      if (response.ok) {
        let data = await response.json();
        setInfo(data);
        setOk(true)
      } else {
        setOk(false);
      }
    }
    foo();
  }, [count])

  const root = document.querySelector("#root");
  root.style.backgroundColor = mode ? "#F6F8FF" : "#141D2F";


  return (
    <div className="App">
      <First mode={mode} setMode={setMode} />
      <Second mode={mode} count={count} setCount={setCount} target={target} setTarget={setTarget} ok={ok} />
      <ThirdLight mode={mode} info={info} />
    </div>
  );
}

export default App;