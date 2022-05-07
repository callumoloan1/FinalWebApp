import React from 'react';
import NavBar from './components/NavBar';
import Welcome from './Welcome';
import Covid from './Covid';
import Health from './Health';
import Profile from './Profile';
import Contact from './Contact';
import PostList from './PostList';
import Activities from './Activities';
import Moodboard from './Moodboard';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Including NavBar and Routing throughout the system in the navigation bar 
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
          <Route exact path="/welcome">
              <Welcome />
            </Route>
            <Route exact path="/covid-19">
              <Covid />
            </Route>
            <Route exact path="/health">
              <Health />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Post">
              <PostList />
            </Route>
            <Route exact path="/Activities">
              <Activities />
            </Route>
            <Route exact path="/Moodboard">
              <Moodboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}  

export default App;
