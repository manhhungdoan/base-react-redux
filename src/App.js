import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
class App extends React.Component {
  state = {
    name: 'mhung',
    address: 'Phu Tho',
    age: 21
  }
  handClick() {
    console.log('click me', this.state.name);
    this.setState({
      name: 'Doan Manh Hung'
    });
  }
  render() {
    return (
      <div>
        Hello World
        <div>My name is {this.state.name} from {this.state.address}</div>
        <button onClick={(event) => { this.handClick(event) }}>Click me</button>
        <MyComponent />
      </div>
    )
  }
}
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       Hello World;
//       <MyComponent />
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }
export default App;
