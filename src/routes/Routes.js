import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ReportDetail from "../pages/report-detail/ReportDetail";
import Profile from "../pages/profile/Profile";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Report/Detail">
        <ReportDetail />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
    </Router>
  );
};

export default Routes;
