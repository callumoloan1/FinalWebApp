import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './Welcome.css';

const App = () => {
    return (
      <div className="head">
          <h1>Welcome to Head Health</h1>
          <p>Where your thoughts are priority</p>
          <div className='body'>
          <p>Hello and welcome to Head Health. <br />
            Head Health
          </p>
          </div>
          <div className='LoginButton'>
                  <LoginButton />
         </div>
         <div className='LogoutButton'>
                  <LogoutButton />
         </div>
      </div>
    );
}

export default App