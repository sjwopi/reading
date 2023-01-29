import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './user/Profile';
import Messenger from './messenger/Messenger';
import Home from './home/Home';
import Nav from './Nav';

export default function App() {
  const [openedCard, setOpenedCard] = React.useState(null);

  function handleOpenCard(card) {
    setOpenedCard(card);
  }

  function closeAllPopups() {
    setOpenedCard(null);
  }
  return (
    <>
      <Routes>
        <Route
          path="/profile"
          element={
            <>
              <Profile onOpenCard={handleOpenCard} />
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
              <Home onOpenCard={handleOpenCard} />
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
