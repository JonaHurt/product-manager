import logo from './logo.svg';
import './App.css';
import { ProductForm } from './components/ProductForm';
import { ListProduc } from './components/ListProduc';
import { Main } from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Detail } from './Views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/product/:id">
            <Detail />
          </Route> 
          <Route exact path="/product">
            <Main />
          </Route>
                   
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
