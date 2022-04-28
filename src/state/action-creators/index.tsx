import { ActionTypes } from "../action-types/Action_types";
import { Actions } from "../actions/Actions";
import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: {
        amount
      }
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: {
        amount: amount
      }
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    })
  }
}