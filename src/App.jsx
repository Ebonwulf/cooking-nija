import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Search from './pages/Search/Search';
import Recipe from './pages/Recipe/Recipe';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/recipes/:id'>
            <Recipe />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
