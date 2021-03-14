import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom' ;
import Header from './components/header'
import Products from './components/products'
import Categories from './components/category'
function App() {
  return (
    <div className="App">
      <Router>
        <Route>
         <Header></Header>
        </Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/categories" component={Categories}></Route>
      </Router>
    
    </div>
  );
}

export default App;
