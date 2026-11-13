import { useState } from 'react'

// 예전 src/App.tsx 에 있던 연습용 컴포넌트. 지금은 페이지에서 쓰지 않는다.
function Button() {
  // let clicked = 0;

  const[clicked, setClicked] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    // clicked++;
    // setClicked(clicked +1);

    setClicked((prev) => prev + 1);
    setClicked((prev) => prev + 1);
  };

  return <button onClick={handleClick}>클릭 {clicked}번</button>;
}

export default Button
