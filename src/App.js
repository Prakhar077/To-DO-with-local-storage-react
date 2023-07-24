//import logo from './logo.svg';
/*import './App.css';
import {NavBar} from './myComponent/navBar';
import {ItemList} from './myComponent/itemList'


function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );*/
 /* let name1 = "Sag";
  let name2 = "Sagar";
  return (
    
    <>
  
    <NavBar name ={name1} name1 = {name2}/>
    <ItemList/>
    
    </>
  );
}

export default App;*/

/*import './App.css';
import {NavBar} from './myComponent/navBar';
import {ItemList} from './myComponent/itemList';
function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";
  return (
    <>
      <NavBar name={name1} name1={name2}/>
      <ItemList/>
    </>
  );
}
export default App;*/

import './App.css';
import {NavBar} from './myComponent/navBar';
import {ItemList} from './myComponent/itemList';
import { AddTodo } from './myComponent/addTodo';
function App() {
  let name1 = "Aaryan";
  let name2 = "Arush";
  return (
    <>
      <NavBar name={name1} name1={name2}/>
      <ItemList/>
    </>
  );
}
export default App;