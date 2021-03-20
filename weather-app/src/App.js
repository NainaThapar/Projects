import Homepage from './homepage';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ForecastDetailPage from './forecast-deatil-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/detail">
          <ForecastDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
