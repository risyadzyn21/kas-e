import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sidebar from "../components/sidebar/Sidebar"



const Routes = () => {
  return (
    <Router>
      <Sidebar />
    </Router>
  )
}

export default Routes
