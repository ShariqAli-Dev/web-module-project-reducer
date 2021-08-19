import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  setMemory,
  callMemory,
  resetMemory,
} from "./actions";
import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyEvent = (number) => {
    dispatch(applyNumber(number));
  };

  const handleOperatorEvent = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearEvent = () => {
    dispatch(clearDisplay());
  };

  const handleSetMemory = (currentTotal) => {
    dispatch(setMemory(currentTotal));
  };

  const handleCallMemory = () => {
    dispatch(callMemory(state.memory));
  };

  const handleResetlMemory = () => {
    dispatch(resetMemory(0));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleSetMemory(state.total);
                }}
                value={"M+"}
              />
              <CalcButton
                onClick={() => {
                  handleResetlMemory();
                }}
                value={"MR"}
              />
              <CalcButton
                onClick={() => {
                  handleCallMemory(state.memory);
                }}
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleApplyEvent(1);
                }}
                value={1}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(2);
                }}
                value={2}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(3);
                }}
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleApplyEvent(4);
                }}
                value={4}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(5);
                }}
                value={5}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(6);
                }}
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleApplyEvent(7);
                }}
                value={7}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(8);
                }}
                value={8}
              />
              <CalcButton
                onClick={() => {
                  handleApplyEvent(9);
                }}
                value={9}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => {
                  handleOperatorEvent("+");
                }}
                value={"+"}
              />
              <CalcButton
                onClick={() => {
                  handleOperatorEvent("*");
                }}
                value={"*"}
              />
              <CalcButton
                onClick={() => {
                  handleOperatorEvent("-");
                }}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={() => {
                  handleClearEvent();
                }}
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
