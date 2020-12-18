import React, {Fragment} from "react";
import './App.css';
import Navbartest from './components/NavBar/navbartest';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import lowfat from './pages/lowfat';
import balanced from './pages/balanced';
import highprotein from './pages/highprotein';
function type  ()  {
  

    return (
      <Fragment>
        <Router>
         <Navbartest />
         <Switch>
           <Route path="/lowfat" exact component={lowfat} />
           <Route path="/balanced" exact component={balanced} />
           <Route path="/highprotein" exact component={highprotein} />
         </Switch>
      </Router>
      </Fragment>
    );
  }
  

  export default type;
  