import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './user/Profile';
import Messenger from './messenger/Messenger';
import Home from './home/Home';
import Nav from './Nav';

import { cards } from '../utils/cards';

export default function App() {
  const [cardsAll, setCardsAll] = React.useState(cards);

  function handleAddNewCard(newCard) {
    setCardsAll([newCard, ...cardsAll])
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Profile />
              <Nav />
            </>
          }
        />
        <Route
          path="/messenger"
          element={
            <>
              <Messenger />
              <Nav />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Home cards={cardsAll} />
              <Nav />
            </>
          }
        />
        <Route path="/add-card" element={<></>} />
        <Route path="/edit-profile" element={<></>} />
      </Routes>
    </>
  );
}
