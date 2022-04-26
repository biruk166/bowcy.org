import React from 'react';
import './App.css';
import Header from './header/Header';
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import { Route, BrowserRouter, Routes, Switch} from 'react-router-dom';

function App() {
  return (
      <div>
          <Header />
          <SectionOne />
          <SectionTwo />
      </div>
     
  );
}

export default App;
