import './App.css';
import { GlobalStyle } from './styles/style';
import React from 'react';

import background from './image/rm222batch2-mind-09.jpg'
import imageWelcome from './image/Group of friends celebrating birthday.jpg'

import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Welcome } from './pages/Welcome';


function App() {
  return (
    <>
      <GlobalStyle background={background}/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/welcome/:user">
            <Welcome image={imageWelcome}/>
          </Route>  
        </Switch>
      </div>
    </>
  );
}

export default App;
