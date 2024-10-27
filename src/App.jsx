import React, { useState,useEffect } from 'react'
import Landing from './components/Landing'
import Header from './components/Header'
import LegalNotice from './components/LegalNotice'
import TermsOfUse from './components/TermsOfUse'
import ContactUs from './components/ContactUs'
import TopArtists from './components/TopArtists'
import UserArtists from './components/UserArtists'

const App = () => {
  const [pageView,setPageView] =useState("topArtists"); 
  
  useEffect(() => {
 if(pageView === "homePage"
  || pageView === "termsOfUse"
  || pageView === "legalNotice"
  || pageView === "contactUs"
  ){
 document.body.classList.remove("spotifyBg")
 document.body.classList.add("homePage")
 }else
 {
  document.body.classList.add("spotifyBg")
 document.body.classList.remove("homePage")
 }

 return () => {
  document.body.classList.remove("homePage", "spotifyBg");
};
  
}, [pageView]);


const renderComponent = () => {
  switch (pageView) {
    case "homePage":
      return (
        <>
          <Header pageView={pageView} setPageView={setPageView} />
          <Landing pageView={pageView} setPageView={setPageView} />
        </>
      );
    case "termsOfUse":
      return <TermsOfUse pageView={pageView} setPageView={setPageView} />;
    case "legalNotice":
      return <LegalNotice pageView={pageView} setPageView={setPageView} />;
    case "contactUs":
      return <ContactUs pageView={pageView} setPageView={setPageView} />;
    case "topArtists":
      return <TopArtists />;
    case "userProfileLogin":
      return <UserArtists />;
    default:
      return <div className="userProfileLogin">OMO</div>;
  }
};


  return (
    <>
    {
     renderComponent() 
    }
    </>
  )
}

export default App