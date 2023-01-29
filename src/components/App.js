import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './user/Profile';
import Setting from './popups/Setting';
import Messenger from './messenger/Messenger';
import Home from './home/Home';
import Nav from './Nav';

export default function App() {
  const [isOpenSetting, setIsOpenSetting] = React.useState(false);

  function handleOpenSetting() {
    setIsOpenSetting(true);
  }

  function closeAllPopups() {
    setIsOpenSetting(false);
  }
  function handleCloseOvwrlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  return (
    <>
      <Routes>
        <Route
          path="/profile"
          element={
            <>
              <Profile onOpenSetting={handleOpenSetting} />
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
              <Home />
              <Nav />
            </>
          }
        />
        <Route path="/add-card" element={<></>} />
        <Route path="/edit-profile" element={<></>} />
      </Routes>

      <Setting isOpen={isOpenSetting} onCloseOverlay={handleCloseOvwrlay} />
    </>
  );
}
