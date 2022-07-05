import React from 'react';
import './App.css';
import StringUpNo from "./test02/index.jsx"
import Test01 from './test01';
function App() {
  const [chooseTest, setChooseTest] = React.useState(1)
  React.useEffect(() => {
    const groupButton = document.querySelectorAll('.button-choose')
    groupButton.forEach(item => item.addEventListener('click', function(event) {
      groupButton.forEach(ele => ele.classList.remove('active'));
      event.target.classList.add("active")
    }))
  },[])
  return (
    <>
      <div className='group-button'>
        <button className='button button-choose active' onClick={() => setChooseTest(1)}>
          Choose Test 1
        </button>
        <button className='button button-choose ' onClick={() => setChooseTest(2)}>
          Choose Test 2
        </button>
      </div>
      {
        chooseTest === 1 ? <Test01/> : <StringUpNo/>
      }
      
      
    </>
  );
}

export default App;
