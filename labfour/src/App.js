import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useStaten } from 'react';
import ImageLink from './imageLink';
import FirstButton from './firstbutton';
// import SecondButton from './secondButton';
// import ThirdButton from './firstbutton';

// import React, { useStaten } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <img src={"https://www.pawsitivesolutionssite.com/wp-content/uploads/2016/08/school-dog-s-300x3001.jpg"} ></img> */}
        {/* <button>Click here</button> */}

        {/* <ImageLink/> */}

        <FirstButton/>


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


  /// this Works 

// const [counter, setCounter] = useState(0);

// useEffect(function() {
//   setTimeout(
//     function() {
//       setCounter(counter + 1);
//     },
//     1000
//   )
// });

// return (
//   <div>
//     <h1>Counter value: {counter}</h1>
//   </div>
// )

//////////////////////////////////////////////////////////

  // // this is working 

  // const [counter, setCounter] = useState(0);

  // function increamentCounter() {
  //   setCounter(counter + 1)
  // }

  // return (
  //   <div>
  //     <h>Counter value: {counter}</h>
  //     <button onClick={increamentCounter}>increament</button>
  //   </div>
  // )

//////////////////////////////////////////////////////////////
 // /// Not working at the moment 




}

export default App;
