import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Profile from './user/Profile';
import Messenger from './messenger/Messenger';
import Nav from './Nav';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/profile"
          element={
            <>
              <Profile />
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
              <Nav />
            </>
          }
        />
        <Route
          path="/add-card"
          element={
            <> 
            </>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <> 
            </>
          }
        />
      </Routes>
    </>
  );
}
