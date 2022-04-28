import { Actions } from '../actions/Actions';
import { ActionTypes } from '../action-types/Action_types';

type state = {
  count: number
}

const initialState = { count: 0 }

const BankReducer = (state: state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return { ...state, count: state.count + action.payload.amount }
    case ActionTypes.WITHDRAW:
      return { ...state, count: state.count - action.payload.amount }
    case ActionTypes.BANKRUPT:
      return { count: 0 }
    default:
      return state
  }
}

export default BankReducer