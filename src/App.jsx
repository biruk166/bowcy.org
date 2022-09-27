import React from 'react';
import './App.css';

import Header from './header/Header';
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import Home from './pages/home/Home';
import ScrollToTop from './ScrollToTop';
import IntroCardArticlePage from './pages/introCardArticlePage/IntroCardArticlePage';
import NewsLetter from './components/newsLetter/NewsLetter';
import NewsArticlePage from './pages/newsArticlePage/NewsArticlePage';
import Vision from './pages/vision/Vision';
import Admin from './contentManagment/adminPage/Admin';
import LogIn from './login/LogIn';
import Donation from './pages/donationPage/Donation';
import EmailPage from './pages/emailPage/EmailPage';
import { Route, BrowserRouter as Router, Routes, matchRoutes} from 'react-router-dom';

import Image from './components/image/Image';

function App(){

  return (
        <Router>
          {/* the scroll top make sure when user navigates to another page.
              it will automaticaly take them to the top of the page  */}
          <ScrollToTop />

          <div className='App'>
            <Header />
            {/* =route for the website to navigate through differnt pages. */}
            <div className='route-content'>
              <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="login" element={ <LogIn />} />
                <Route path='/vision' element={<Vision />} />
                <Route path="section-one" element={ <SectionOne/>} />
                <Route path="section-two" element={ <SectionTwo/>} />
                <Route path='/intro-cards-article-page' element={<IntroCardArticlePage />} />
                <Route path='/email-page' element={<EmailPage />} />
                <Route path='donation-page' element={<Donation/>} />
                <Route path='admin-page' element={<Admin />} />
                <Route path='images' element={<Image/>} />
                <Route path="intro-card-article" element={ <IntroCardArticlePage />}/>
                <Route path="news-card-article" element={ <NewsArticlePage />}/>
              </Routes> 
            </div>


            <NewsLetter />
          </div>
        </Router>
        
     
  );
}

export default App;
