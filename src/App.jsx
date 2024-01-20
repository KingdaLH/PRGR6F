import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
    const [list, setList] = useState(null);

    // useEffect(() => {
    //     const loadJson = async () => {
    //         const response = await fetch("http://185.228.81.142:8080/cards", {
    //                 method: "GET",
    //                 headers: {
    //                     "Accept": "application/json",
    //                     "Content-Type": "application/json",
    //                 }
    //             });
    //             if (!response.ok) {
    //                 throw new Error("Response is not okay");
    //             }
    //
    //             const data = await response.json();
    //             console.log(data);
    //             setList(data);
    //         }
    //     loadJson()
    //         .catch(console.error);

    //}, []);

        const loadGet = () => {
            fetch("http://185.228.81.142:8080/cards", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            })
                .then((response) => response.json())
                .then((data) => {setList(data); console.log(data)})
                .catch((error) => console.error(error))
       };
   // }

    useEffect(() => {loadGet();} , []);

    if (!list) {
        return (<div>Still loading...</div>)
    }

    // const item = list.items.map((it, i) => (
    //     <detail key = {i} name ={it.name} />
    // ));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <div>Hier dus {list.items.map((item, index) => (<p key={index}>{item.id}</p>))}</div>
    </>
  )
}

export default App
