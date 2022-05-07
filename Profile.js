import React from 'react';
import './Profile.css'
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <div>Loading User Profile!</div>
    }

    return( 
        isAuthenticated && (
            <div className='profile'>
                <h1>Your Profile</h1>
                <img src= {user.picture}/>
                <p>Username: {user.nickname}</p>
                <p>Email: {user.email}</p>
                <div className='Button'>
                    <LogoutButton />
                </div>
            </div>
        )
    )
}

export default UserProfile;