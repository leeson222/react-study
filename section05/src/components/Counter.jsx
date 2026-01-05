import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    
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
  )
}

export default Counter;