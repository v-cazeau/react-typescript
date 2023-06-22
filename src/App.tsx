import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //The Basics
    // let firstValue: string = 'Manny';
    // let firstValue: number = 34 ;
    // let firstValue: boolean = true ;
    // let firstValue: number[] = [2, 3, 56];
    // let firstValue: Array<string> = ['2', '3', 'Manny'];

  //A Tuple : a type of array where you can insert multiple types
    // let aTuple: [string, number] = ['Manny', 34];

  //An Enum: similar to objects with multiple items
  // enum Codes (first = 1, second = 2 );
  
  //Any: use whenever you're not sure what they type is; use in prototypes
  let firstName: any = '3';

  //void: for voiding a return type
  // const warning = () : void => {
  //   console.log('Warning')
  // }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The values {firstName} is of {typeof firstName } type!
        </p>
      </header>
    </div>
  );
}


export default App;
