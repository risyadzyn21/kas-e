import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditSafePage from "../pages/edit-safe";
import Home from "../pages/home/Home";
import LandingPage from "../pages/landing-page/LandingPage";
import LoginRegister from "../pages/login-register/LoginRegister";
import ReportPage from "../pages/report-page";
import MyProfile from "../pages/profile/MyProfile";
import EditProfile from "../pages/edit-profile/EditProfile";
import EditCategoryLimit from "../pages/edit-category-limit";
import SeeAllSafe from "../pages/see-all-safe/SeeAllSafe";
import ReportDetail from "../pages/report-detail/ReportDetail";
import ProtectedRoute from './ProtectedRoute'

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/auth" component={LoginRegister} />
        <ProtectedRoute path="/transactions" component={Home} />
        <ProtectedRoute path="/report" component={ReportPage} />
        <ProtectedRoute path="/report-detail" component={ReportDetail} />
        <ProtectedRoute path="/edit-safe" component={EditSafePage} />
        <ProtectedRoute path="/edit-category-limit" component={EditCategoryLimit} />
        <ProtectedRoute path="/my-profile" component={MyProfile} />
        <ProtectedRoute path="/see-all-safe" component={SeeAllSafe} />
        <ProtectedRoute path="/edit-profile" component={EditProfile} />
      </Switch>
    </Router>
  );
};

export default Routes;
