import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyComponent />
//       </div>
//     )
//   }
// }
const App = () => {
  const count = useSelector(state => state.counter.count);
  //stateRedux => call Reducer => state's reducer
  //state redux changes => react changes
  const dispatch = useDispatch();

  return (
    // <div>
    //   Hello World;
    //   <MyComponent />
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header>
    </div>
  );
}
export default App;
