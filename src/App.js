import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Watchlist from './components/Watchlist';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Banner />

            }
          />

          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>

      </BrowserRouter>
      <Movies />

    </div>
  );
}

export default App;
