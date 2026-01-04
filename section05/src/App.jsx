import { useState } from 'react';
import './App.css'
import { useFormStatus } from 'react-dom';


const Bulb = ({light})=>{
  console.log(light);
  return <div>{light === 'ON' ? ( 
      <h1 style={{backgroundColor: "orange"}}>ON</h1>
      ) : (
      <h1 style={{backgroundColor: "grey"}}>OFF</h1>
    )}
  </div>
}

function App() {
  // 두 개의 요소를 담은 배열을 반환함
  // 인수로는 state의 초기값을 받아서 반환
  // 두번째 요소는 상태변화함수
  const [count, setCount] = useState(0);
  
  const [light, setLight] = useState("OFF");
  // 상수가 아닌 변수로 설정할 경우 컴포넌트가 리렌더링되지 않음

  return (
    <>
      <div>
        <Bulb light = {light} />
        <button onClick={()=>{
          setLight(light === "ON" ? "OFF" : "ON");
        }}>
          전구 {light === "ON" ? "OFF" : "ON"}
        </button>
      </div>
      <div>
        {/* 컴포넌트 값이 바뀌면 다시 리턴한다 (리렌더링)*/}
        <h1>{count}</h1>
        <button
          onClick={()=>{
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
