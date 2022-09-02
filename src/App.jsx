import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './header/Header';
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import Home from './pages/home/Home';
import ScrollToTop from './ScrollToTop';
import IntroCardArticlePage from './pages/introCardArticlePage/IntroCardArticlePage';
import NewsLetter from './components/newsLetter/NewsLetter';
import NewsArticlePage from './pages/newsArticlePage/NewsArticlePage';
import DonationForm from './components/donationForm/DonationForm';
import EmailForm from './components/emailForm/EmailForm';
import Vision from './pages/vision/Vision';
import Admin from './contentManagment/adminPage/Admin';
import LogIn from './login/LogIn';
import { Route, BrowserRouter as Router, Routes, matchRoutes} from 'react-router-dom';

import Image from './components/image/Image';

function App() {
  let donateFormDispStatus = useSelector((state) => state.display.donateForm);
  let emailFormDispStatus = useSelector((state) => state.display.emailForm);

  return (
      
        <Router>
          <ScrollToTop />
          <div className='App'>
            <Header /> 
            {/* <Admin /> */}
            <div className={'app-donation-form-container'}>
              <DonationForm />
            </div>
            <div className= {emailFormDispStatus ? "app-email-from-container" : "app-email-form-container-none"}>
              <EmailForm />
            </div>

            <div className='route-content'>
              <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="login" element={ <LogIn />} />
                <Route path='/vision' element={<Vision />} />
                <Route path="section-one" element={ <SectionOne/>} />
                <Route path="section-two" element={ <SectionTwo/>} />
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
