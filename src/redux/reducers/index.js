import userReducer from "./UserReducer";
import transactionReducer from "./TransactionReducer";
import incomeReducer from "./IncomeReducer";
import editCategoryLimitReducer from "./EditCategoryLimitReducer";
import { combineReducers } from "redux";
import UpdateSafeReducer from "./UpdateSafeReducer";
import DeleteSafesReducer from "./DeleteSafesReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userReducer,
  transactionReducer,
  incomeReducer,
  editCategoryLimitReducer,
  UpdateSafeReducer,
  DeleteSafesReducer,
  profileReducer,
});

export default rootReducer;
