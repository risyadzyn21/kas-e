import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import ReportDetail from "../pages/report-detail/ReportDetail";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Report/Detail">
        <ReportDetail />
      </Route>
    </Router>
  );
};

export default Routes;
