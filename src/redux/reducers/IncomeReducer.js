// const initialState = {
//   addIncome: false,
//   addIncomeLoading: false,
//   addIncomeError: false
// };

// function incomeReducer(state = initialState, action) {
//   // const { type, payload } = action
//   switch (action.type) {
//     case 'addincome/get-start':
//       return {
//         ...state,
//         loading: true
//       }
//     case 'addincome/get-success':
//       return {
//         ...state,
//         addIncome: action.payload.addIncome,
//         loading: false,
//         error: ''
//       }
//     case 'addincome/get-failed':
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error
//       }
//     default:
//       return state
//   }
// }


// export default incomeReducer;