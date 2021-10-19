<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DailyChart from "../components/charts/DailyChart"
import HeaderTimeDaily from "../components/header/HeaderTimeDaily"
import Sidebar from "../components/sidebar/Sidebar"
import EditSafePage from "../pages/edit-safe"
import Home from "../pages/home/Home"
import LandingPage from "../pages/landing-page/LandingPage"
import LoginRegister from "../pages/login-register/LoginRegister"
import ReportPage from "../pages/report-page"
import Profile from '../pages/profile/Profile'


=======
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
>>>>>>> c7034de54500bcd18726b9b9c5cfdd6342d6466f

const Routes = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/' component={LandingPage} />
        <Route path='/auth' component={LoginRegister} />
        <Route path='/transactions' component={Home} />
        <Route path='/report' component={ReportPage} />
        <Route path='/edit-safe' component={EditSafePage} />
        <Route path='/profile' component={Profile} />
=======
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth" component={LoginRegister} />
        <Route path="/transactions" component={Home} />
        <Route path="/report" component={ReportPage} />
        <Route path="/edit-safe" component={EditSafePage} />
        <Route path="/my-profile" component={MyProfile} />
        <Route path="/edit-profile" component={EditProfile} />
>>>>>>> c7034de54500bcd18726b9b9c5cfdd6342d6466f
      </Switch>
    </Router>
  );
};

export default Routes;
