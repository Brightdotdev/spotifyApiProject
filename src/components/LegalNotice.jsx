import React from 'react'

const LegalNotice = ({pageView, setPageView}) => {
  
  
    return (
    <article className="rounded-lg shadow-2xl shadow-spotifyBlack flex p-2 max-w-screen max-h-screen">
    <div className="flex flex-col items-start justify-start
    mx-auto text-spotifyWhiteText overflow-hidden overflow-y-auto scrollable">
   <h2 className="text-2xl font-bold mb-4 font-helveticaThick ">LEGAL NOTICE</h2>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">Disclaimer</h3>
   <p className="md:mb-2 m-0 font-sans">
     This application is not affiliated with, endorsed by, or sponsored by Spotify. All rights to the Spotify name and logo are owned by Spotify AB.
   </p>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">Use of Spotify API</h3>
   <p className="md:mb-2 m-0 font-sans">
     This application uses the Spotify API, which is governed by Spotify's Developer Terms of Service and API Terms of Use. By using this application, you agree to comply with those terms.
   </p>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">Data Usage</h3>
   <p className="md:mb-2 m-0 font-sans">
     Any data retrieved from Spotify through this application is used in accordance with Spotify’s privacy policy. Please refer to <a href="https://www.spotify.com/legal/privacy-policy/" target='blank' className="text-blue-500 underline">Spotify's Privacy Policy</a> for more information.
   </p>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">User Responsibility</h3>
   <p className="md:mb-2 m-0 font-sans">
     Users are responsible for ensuring that they have the right to use any content retrieved through this application in compliance with applicable laws and Spotify's terms.
   </p>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">Changes to the Legal Notice</h3>
   <p className="md:mb-2 m-0 font-sans">
     This legal notice may be updated from time to time. Continued use of the application indicates acceptance of any changes.
   </p>
 
   <h3 className="md:text-xl text-lg  font-semibold mt-3 font-helveticaMedium">Contact Information</h3>
   <p  className='mmd:b-2  m-0 font-sans' >
     For any inquiries regarding this legal notice or the application, please contact <a href="mailto:mail.bright.dev@gmail.com" className='underline font-sans'>BRIGHT</a>.
   </p>
 </div>



 <button
 onClick={() => setPageView("homePage")}
 className="absolute top-[85%] 
 text-sm font-sans text-spotifyBlack font-bold
 right-[2%] w-[9rem] p-2 rounded-lg flex h-[3rem] bg-spotifyWhiteText items-center justify-center gap-2">

 BACT TO PAGE
 </button>
    
     </article>

)
}

export default LegalNotice