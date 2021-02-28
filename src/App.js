import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TodoList from './components/TodoList'
import State from './components/States'
import RestApi from './components/RestApi'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/rest-api" exact component={RestApi} />
          <Route path="/states" component={State} />
          <Route path="/to-dos" component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
