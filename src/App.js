import LandingPage from './pages/landing-page/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <LandingPage />
      <Switch>
      <Route path='/' />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
