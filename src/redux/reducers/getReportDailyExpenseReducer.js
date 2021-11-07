// import * as actions from '../actions'
// import { isToday, isYesterday, isThisMonth } from 'date-fns';
// const initialState = {
//   tabVariant: 'day',
//   reportsDailyExpense: [],
//   filtered: [],
//   isLoading: false,
//   hasErrors: false
// };


// function GetReportDailyExpenseReducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.GET_REPORT_DAILY_EXPENSE:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case actions.GET_REPORT_DAILY_EXPENSE_SUCCESS:
//       return {
//         ...state,
//         filtered: action.payload,
//         reportsDailyExpense: action.payload,
//         isLoading: false

//       };
//     case actions.GET_REPORT_DAILY_EXPENSE_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         hasErrors: action.error
//       };

//     case 'UPDATE_TAB_VARIANT':
//       return {
//         ...state,
//         tabVariant: action.payload
//       }
//     default:
//       return state;
//   }
// }

// export default GetReportDailyExpenseReducer