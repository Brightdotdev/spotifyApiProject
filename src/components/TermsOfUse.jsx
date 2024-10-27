import React from 'react'

const TermsOfUse = ({pageView, setPageView}) => {
  return (
    <article className="rounded-lg shadow-2xl shadow-spotifyBlack flex p-2 max-w-screen max-h-screen">
 
  <div className="flex flex-col items-start justify-start mx-auto text-spotifyWhiteText overflow-hidden overflow-y-auto scrollable">
         
          <h2 className="text-2xl font-bold mb-3 font-helveticaThick">Terms of Use</h2>

  <h3 className="md:text-xl text-[1rem] font-semibold mt-2 font-helveticaMedium">1. Acceptance of Terms</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    By accessing or using this application, you agree to comply with these Terms of Use. If you do not agree, you must not use the application.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">2. Changes to Terms</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting. Your continued use of the application constitutes acceptance of the revised terms.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">3. Use of the Application</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    You agree to use the application only for lawful purposes and in accordance with these Terms. You must not use the application in any way that violates any applicable federal, state, local, or international law.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">4. User Responsibilities</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">5. Disclaimer of Warranties</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    The application is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the application, including its availability, reliability, or accuracy.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">6. Limitation of Liability</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the application.
  </p>

  <h3 className="md:text-xl text-[1rem]  font-semibold mt-2 font-helveticaMedium">7. Governing Law</h3>
  <p className="md:mb-1 m-0 font-sans text-sm">
    These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms will be resolved in the courts of [Your Jurisdiction].
  </p>

  <h3 className="md:text-xl text-lg  font-semibold mt-2 font-helveticaMedium">Contact Information</h3>
   <p  className='mmd:b-2  m-0 font-sans' >
     For any inquiries regarding this legal notice or the application, please contact <a href="mailto:mail.bright.dev@gmail.com" className='underline font-sans'>BRIGHT</a>.
   </p>
 </div>



 <button 
 onClick={() => setPageView("homePage")}
 className="absolute top-[90%] 
 text-sm font-sans text-spotifyBlack font-bold
 right-[2%] w-[9rem] p-2 rounded-lg flex h-[3rem] bg-spotifyWhiteText items-center justify-center gap-2">

 BACT TO PAGE
 </button>
  </article>
  
  )
}

export default TermsOfUse