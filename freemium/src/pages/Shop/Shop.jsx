import './Shop.css'
import { useEffect, useState } from 'react';
import ItemList from 'components/ItemList';
import Navbar from 'components/Navbar';
import { useUserContext } from 'context/UserContext';
import Summon from 'components/Summon';
import UnlockItem from 'components/UnlockItem';
import Optopus from 'components/Optopus';
import Footer from 'components/Footer';

export default function Shop() {
  return (
    <div className="shopContainer">
      <Navbar />
      <UnlockItem />
      <Footer />
    </div>
  )
}

