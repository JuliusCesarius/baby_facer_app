import React from 'react';
import MashupContainer from './components/MashupContainer';
import Card from './components/Card';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/loteria/:id">
            <Loteria />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="avocado_couple"></div>
        <MashupContainer />
      </header>
    </div>
  );
}

function Loteria() {
  let { id } = useParams();
  const numOfCards = 16;
  const cards = [];
  for (var i = 1; i <= numOfCards; i++) {
    cards.push(<Card></Card>);
  }
  return (
    <div className={`loteria loteria${id}`} >
      {cards}
    </div>
  );
}

export default App;
