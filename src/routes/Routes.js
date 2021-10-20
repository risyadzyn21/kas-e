import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DailyChart from "../components/charts/DailyChart";
import HeaderTimeDaily from "../components/header/HeaderTimeDaily";
import Sidebar from "../components/sidebar/Sidebar";
import EditSafePage from "../pages/edit-safe";
import Home from "../pages/home/Home";
import LandingPage from "../pages/landing-page/LandingPage";
import LoginRegister from "../pages/login-register/LoginRegister";
import ReportPage from "../pages/report-page";
import MyProfile from "../pages/profile/MyProfile";
import EditProfile from "../pages/edit-profile/EditProfile";
import SeeAllSafe from "../pages/see all safe/SeeAllSafe";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth" component={LoginRegister} />
        <Route path="/transactions" component={Home} />
        <Route path="/report" component={ReportPage} />
        <Route path="/edit-safe" component={EditSafePage} />
        <Route path="/my-profile" component={MyProfile} />
        <Route path="/see-all-safe" component={SeeAllSafe} />
        <Route path="/edit-profile" component={EditProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
