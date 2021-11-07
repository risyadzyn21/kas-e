// import * as actions from '../actions'
// const initialState = {
//   tabVariant: 'day',
//   reportsDailyIncome: [],
//   filtered: [],
//   isLoading: false,
//   hasErrors: false
// };


// function getReportDailyIncomeReducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.GET_REPORT_DAILY_INCOME:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case actions.GET_REPORT_DAILY_INCOME_SUCCESS:
//       console.log(action.payload)
//       return {
//         ...state,
//         filtered: action.payload,
//         reportsDailyIncome: action.payload,
//         isLoading: false

//       };
//     case actions.GET_REPORT_DAILY_INCOME_FAILURE:
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

// export default getReportDailyIncomeReducer