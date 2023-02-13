import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetail, ItemListContainer, NavBar } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetail />}></Route>
          <Route path='/category/:category' element={<ItemListContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
