import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Search from './pages/Search/Search';
import Recipe from './pages/Recipe/Recipe';
import './App.scss';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
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
