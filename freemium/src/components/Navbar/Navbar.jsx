import { useState } from 'react'
import waveCoin from 'assets/waveCoin.svg';

import './Navbar.css'

import { useUserContext } from 'context/UserContext';
import { useAuthContext } from 'context/AuthContext';

export default function Navbar() {
  const {fetchUser} = useAuthContext();
  const user = fetchUser();
  console.log(user)
  return (
    <div className='navbar'>  
      <div className='coins'>
          <img src={waveCoin}/> {user.coins}
      </div>
      <button className='logout'>Logout</button>
    </div>
  )
}
