
import './App.css';

import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clock/Clock';
import Contact from './Components/Contact/Contact';
import Navigation from './Components/Navigation/Navigation';
import Jeopardy from './Components/Jeopardy/Jeopardy';


import {Route,Switch}from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route
      exact
      path="/"
      render={(...props)=> <Welcome {...props}name='Cramer' />}
      />
      <Route path="/clock" component={Clock}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/welcome/:name" component={Welcome}/>
      <Route path="/Jeopardy" component={Jeopardy}/>
      <Route><div>404</div></Route>
      </Switch>

    </div>
  );
}

export default App;
