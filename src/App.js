import React from "react";
import "./App.css";
import { increment, decrement, loginToggle } from "./Actions/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1> {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(loginToggle())}>Login Toggle</button>
      {isLogged ? (
        <h3>The User is logged in.</h3>
      ) : (
        <h3>The User is not logged in.</h3>
      )}
    </div>
  );
}

export default App;
