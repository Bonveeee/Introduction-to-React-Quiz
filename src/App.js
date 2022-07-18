import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
  //Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
    return <div>This is children content</div>;
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function ToggleChallenge(){
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
//Uncomment this to tackle quiz


// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// // Comment above code after completion

function App() {
  const [] = React.useState(true);

 const userNames = users.map(element => element)
 console.log(userNames)
  return (
    
    <>
    <h1>JSX is cool!</h1>
    <img src={logo} className="App-logo" alt="logo" />
      <h3>{userNames}</h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div> <button onClick={handleClick}>{ToggleChallenge}</button></div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
