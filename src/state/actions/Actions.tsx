import { ActionTypes } from '../action-types/Action_types';

interface DepositAction {
  type: ActionTypes.DEPOSIT,
  payload: {
    amount: number
  }
}

interface WithdrawAction {
  type: ActionTypes.WITHDRAW,
  payload: {
    amount: number
  }
}

interface BankruptAction {
  type: ActionTypes.BANKRUPT,
}

export type Actions = DepositAction | WithdrawAction | BankruptAction