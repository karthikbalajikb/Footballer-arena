import React from 'react';
import Toolbar from '../containers/Toolbar/Toolbar';
import PlayersListContainer from '../containers/PlayersListContainer/PlayersListContainer';
import './App.css';


const App = () => (
  <div>
    <Toolbar />
    <PlayersListContainer />
  </div>
);

export default App;
