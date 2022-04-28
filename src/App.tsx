import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators, State } from './state'
function App() {
  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(ActionCreators, dispatch)
  const { count } = useSelector((state: State) => state.bank)

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="space-y-3">
        <p className="text-center text-xl font-semibold">{count}</p>
        <div className="flex space-x-6">
          <button className="" onClick={() => depositMoney(1)}>Deposit</button>
          <button className="" onClick={() => withdrawMoney(1)}>Withdraw</button>
          <button className="" onClick={() => bankrupt()}>Bankrupt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
