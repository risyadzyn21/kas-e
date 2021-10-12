import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HeaderTime from "../components/header/HeaderTime"
import Sidebar from "../components/sidebar/Sidebar"



const Routes = () => {
  return (
    <Router>
      {/* <Sidebar /> */}\
      <HeaderTime />
    </Router>
  )
}

export default Routes
