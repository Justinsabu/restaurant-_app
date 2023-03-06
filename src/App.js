import './App.css';
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Restlist from './components/Restlist';
import { Route,Routes } from 'react-router-dom';
import Viewrest from './components/Viewrest';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Restlist/>}/>
        <Route path='/viewrest/:id' element={<Viewrest/>}/>
      </Routes>
      
      <Footer/> 
    </div>
  );
}

export default App;
