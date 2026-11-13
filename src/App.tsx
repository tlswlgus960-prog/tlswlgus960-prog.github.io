import { useState } from 'react'

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

function App() {
  return <div>안녕 리액트 <Button /><Button /></div>;
}

export default App
