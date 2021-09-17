import { createSlice } from '@reduxjs/toolkit';

const bankingSlice = createSlice({
  name: 'bank',
  initialState: [
    { accountNumber: 1, amount: 100 },
    { accountNumber: 2, amount: 300 },
    { accountNumber: 3, amount: 500 },
  ],
  reducers: {
    deposit: (state, action) => {
      console.log('Deposit Money');
      // Check for action.Payload.AccountNumber, then increase action.payload.amount
      // Test Code
      const newAccount = {
        accountNumber: Date.now(),
        amount: state.length * 100,
      };

      state.push(newAccount);
    },
    withdraw: (state, action) => {
      console.log('Withdraw Money');
      // Check for action.Payload.AccountNumber, then decrease action.payload.amount
    },
  },
});

export const { deposit, withdraw } = bankingSlice.actions;

export default bankingSlice.reducer;
