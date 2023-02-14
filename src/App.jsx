import React from 'react';
import './App.css';

// navigation
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';


import Header from './header/Header';
import SectionOne from './sectionOne/SectionOne';
import SectionTwo from './sectionTwo/SectionTwo';
import ScrollToTop from './ScrollToTop';
import Admin from './contentManagment/adminPage/Admin';
import LogIn from './contentManagment/login/LogIn';
import Image from './components/image/Image';

// admin page materials
import CMSArticle from './contentManagment/editAddArticle/CMSArticle';
import EditAddPhotos from './contentManagment/editAddPhotos/EditAddPhotos';

// pages
import DonationPage from './pages/DonationPage';
import EmailPage from './pages/EmailPage';
import HomePage from './pages/HomePage';
import IntroCardArticlePage from './pages/IntroCardArticlePage';
import NewsArticlePage from './pages/NewsArticlePage';
import ReportPage from './pages/ReportPage';
import ResearchPage from './pages/ResearchPage';
import VisionPage from './pages/VisionPage';

// indpendent page content
import Footer from './pages/footer/Footer';



function App(){
  return (
        <Router>
          {/* the scroll top make sure when user navigates to another page.
              it will automaticaly take them to the top of the page  */}
          

          <div className='App'>
            <Header />
            {/* =route for the website to navigate through differnt pages. */}
            <div className='route-content'>
              <Routes>
                <Route path="/*" element={ <HomePage /> }/>
                <Route path="login" element={ <LogIn />} />
                <Route path='vision' element={<VisionPage />} />
                <Route path="section-one" element={ <SectionOne/>} />
                <Route path="section-two" element={ <SectionTwo/>} />
                <Route path='intro-cards-article-page' element={<IntroCardArticlePage />} />
                <Route path='/email-page' element={<EmailPage />} />
                <Route path='donation-page' element={<DonationPage/>} />
                <Route path='research-page' element={<ResearchPage />} />
                <Route path='report-page' element={<ReportPage />} />

                <Route path='admin-page' element={<Admin />} >
                    <Route path='edit-add-article' element={<CMSArticle/>}/>
                    <Route path='edit-add-photos' element={<EditAddPhotos />}  />
                </Route>
                

                <Route path='images' element={<Image/>} />
                <Route path="intro-card-article" element={ <IntroCardArticlePage />}/>
                <Route path="news-card-article" element={ <NewsArticlePage />}/>
              </Routes> 
            </div>


            <Footer />
          </div>
          <ScrollToTop />
        </Router>
        
     
  );
}

export default App;
