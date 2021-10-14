import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DailyChart from "../components/charts/DailyChart"
import HeaderTimeDaily from "../components/header/HeaderTimeDaily"
import Sidebar from "../components/sidebar/Sidebar"
import Home from "../pages/home/Home"
import ReportPage from "../pages/report-page"



const Routes = () => {
  return (
    <Router>
      <ReportPage />
    </Router>
  )
}

export default Routes
