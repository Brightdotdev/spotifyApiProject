import React, { useState,useEffect } from 'react'
import Nav from './Nav'

const Landing = ({pageView, setPageView}) => {
   
    const [index,setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
    
    const landingTransitions = [
        "YOUR TOP ARTISTS ON SPOTIFY!","YOUR MOST LISTENED SONGS ON SPOTIFY!", "SPOTIFY'S TOP ARTISTS"
        , "SPOTIFY'S TOP SONGS IN YOUR REGION","YOUR TOP ARTISTS ON SPOTIFY!"
    ]
    useEffect(() => {
        const interval = setInterval(() => {
          setIsVisible(false); 
    
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % landingTransitions.length);
            setIsVisible(true); 
          }, 500); 
        }, 3000); 
    
        return () => clearInterval(interval);
      }, []);
  
  return (
    
        <section className="flex flex-col w-screen p-4 md:w-[95vw] lg:items-start
        mt-[1rem] gap-2 justfy-center md:items-center">
            <h1 className="md:text-6xl text-4xl max-w-[80vw] min-h-[14rem] md:min-h-[15rem] xl:max-w-[40vw] md:max-w-[100%] md:text-center lg:text-start text-coralColor font-helveticaThick">DISCOVER <span className={'font-helveticaThick text-spotifyWhiteText  transition-opacity duration-500 ' + `${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}` }>{landingTransitions[index]}</span></h1>
            <p class="md:text-lg text-sm mb-8 text-secondaryText font-helveticaMedium">OR Log in to see your top songs, artists, and personalized playlists.</p>
            <div className="flex gap-2 md:gap-[1rem]">
                <button 
                onClick={() => setPageView("topArtists")}
            
                className='bg-coralColor 
               md:text-[1rem] md:p-4 font-helveticaMedium
                 text-spotifyWhiteText rounded-full 
                p-3
                text-[.7rem]
                 transform transition-all duration-700 hover:scale-100 
                drop-shadow-normalShadow hover:drop-shadow-extrahadow' >WHO’S SPOTIFY’S #1 ARTIST?</button>
                <button 
                  onClick={() => setPageView("userPorfileLogin")}
                
                className='text-spotifyWhiteText font-helveticaMedium 
                 text-[.4rem] md:text-[1rem]
                shadow-spotifyWhiteText shadow-sm border-dotted border rounded-full p-3 hover:scale-115'>SHOW ME My TOP ARTISTS! <span className='lg:text-sm' >(Log in required)</span></button>
            </div>


<div className="w-[90vw] flex-col items-center gap-2 justify-center mt-[3rem]   flex md:hidden">
<a href='/' className="w-[5rem] rounded-full items-center justify-start">
   
   <svg xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 473.44 65.98"><defs>
     </defs><g id="Layer_2" data-name="Layer 2"><g id="logo"><g id="logoBright">
       <path class="cls-1" 
       d="M6,17.2A110.18,110.18,0,0,1,23.7,15.89c8.37,0,13.52.83,18,3.41a13.19,13.19,0,0,1,7.24,12c0,5.35-3.13,10.38-10,12.92v.23C45.86,46.24,51,51.53,51,59.31a16.1,16.1,0,0,1-6.32,12.9c-4.45,3.58-11.79,5.53-23.88,5.53A105.84,105.84,0,0,1,6,76.84Zm13.6,23.26H24c7.27,0,11.07-3,11.07-7.54s-3.5-7-9.7-7a29.54,29.54,0,0,0-5.83.42Zm0,26.87a34.1,34.1,0,0,0,5.27.25c6.24,0,11.72-2.41,11.72-8.81,0-6.08-5.44-8.51-12.29-8.52h-4.7Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M60.4,17.2a115.51,115.51,0,0,1,18.26-1.31c9,0,15.32,1.38,19.65,4.81,3.63,2.88,5.62,7.15,5.62,12.74A16.11,16.11,0,0,1,93.21,48.36v.29c4.21,1.7,6.58,5.73,8.12,11.31,1.87,6.87,3.71,14.79,4.9,17.14H92.17C91.23,75.35,89.72,70.46,88,63s-4.24-9.62-9.89-9.7H74V77.1H60.4ZM74,43.32h5.38c6.81,0,10.89-3.47,10.89-8.75,0-5.56-3.81-8.41-10.09-8.44a28.19,28.19,0,0,0-6.18.46Z" 
       transform="translate(-5.98 -12.62)"/>
       <path class="cls-1" d="M127.57,16.36V77.1H113.84V16.36Z" 
       transform="translate(-5.98 -12.62)"/><path class="cls-1" 
       d="M190.24,74.3A67.43,67.43,0,0,1,170,77.71c-11.1,0-19.11-2.78-24.7-8.15s-8.62-13.18-8.59-22.11c.08-20.2,14.8-31.69,34.69-31.69,7.84,0,13.88,1.48,16.88,2.91l-2.87,11c-3.37-1.45-7.45-2.58-14.13-2.58-11.45,0-20.16,6.43-20.16,19.65,0,12.54,7.92,19.89,19.17,19.89a19.52,19.52,0,0,0,6.71-.86V53h-9.39V42.3h22.67Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M214.71,16.36V39.73h22.65V16.36h13.73V77.1H237.36V51.69H214.71V77.1H201V16.36Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M274.79,27.89H258.4V16.36h46.75V27.89H288.52V77.1H274.79Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M318.48,67.73a4.69,4.69,0,1,1-4.66,4.67A4.7,4.7,0,0,1,318.48,67.73Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M379.17,13.12V63.93c0,5,.17,10.22.36,13.17H367.34l-.57-6.46h-.19c-2.78,5-8.12,7.46-13.81,7.46-10.41,0-18.83-8.94-18.83-22.65C333.88,40.64,343.18,32,353.68,32c5.45,0,9.62,1.94,11.6,5h.18V13.12Zm-13.71,38.6a14,14,0,0,0-.18-2.49,8.14,8.14,0,0,0-7.95-6.7c-6.29,0-9.47,5.57-9.47,12.52,0,7.42,3.66,12.11,9.37,12.11a8.1,8.1,0,0,0,7.94-6.57,13.84,13.84,0,0,0,.29-3.1Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M400.73,59.46c.41,5.69,6,8.39,12.43,8.39A36.67,36.67,0,0,0,425.3,66l1.85,9.28a42.78,42.78,0,0,1-16,2.79c-14.94,0-23.52-8.7-23.52-22.45,0-11.2,7-23.6,22.23-23.6,14.3,0,19.7,11.12,19.7,22a26.5,26.5,0,0,1-.49,5.43Zm16.1-9.4c0-3.3-1.45-8.94-7.69-8.94-5.79,0-8.14,5.3-8.52,8.94Z" transform="translate(-5.98 -12.62)"/><path class="cls-1" d="M447.43,33l5.93,20.52c1.08,3.72,1.84,7.19,2.53,10.72h.29c.68-3.64,1.44-6.93,2.44-10.72L464.28,33H478.7L462.28,77.1H448.59L432.56,33Z" 
       transform="translate(-5.98 -12.62)"/>
       <path class="cls-2" d="M6,17.2A110.18,110.18,0,0,1,23.7,15.89c8.37,0,13.52.83,18,3.41a13.19,13.19,0,0,1,7.24,12c0,5.35-3.13,10.38-10,12.92v.23C45.86,46.24,51,51.53,51,59.31a16.1,16.1,0,0,1-6.32,12.9c-4.45,3.58-11.79,5.53-23.88,5.53A105.84,105.84,0,0,1,6,76.84Zm13.6,23.26H24c7.27,0,11.07-3,11.07-7.54s-3.5-7-9.7-7a29.54,29.54,0,0,0-5.83.42Zm0,26.87a34.1,34.1,0,0,0,5.27.25c6.24,0,11.72-2.41,11.72-8.81,0-6.08-5.44-8.51-12.29-8.52h-4.7Z" transform="translate(-5.98 -12.62)"/><path class="cls-3" d="M60.4,17.2a115.51,115.51,0,0,1,18.26-1.31c9,0,15.32,1.38,19.65,4.81,3.63,2.88,5.62,7.15,5.62,12.74A16.11,16.11,0,0,1,93.21,48.36v.29c4.21,1.7,6.58,5.73,8.12,11.31,1.87,6.87,3.71,14.79,4.9,17.14H92.17C91.23,75.35,89.72,70.46,88,63s-4.24-9.62-9.89-9.7H74V77.1H60.4ZM74,43.32h5.38c6.81,0,10.89-3.47,10.89-8.75,0-5.56-3.81-8.41-10.09-8.44a28.19,28.19,0,0,0-6.18.46Z" transform="translate(-5.98 -12.62)"/><path class="cls-3" d="M127.57,16.36V77.1H113.84V16.36Z" transform="translate(-5.98 -12.62)"/>
       <path class="cls-3" d="M190.24,74.3A67.43,67.43,0,0,1,170,77.71c-11.1,0-19.11-2.78-24.7-8.15s-8.62-13.18-8.59-22.11c.08-20.2,14.8-31.69,34.69-31.69,7.84,0,13.88,1.48,16.88,2.91l-2.87,11c-3.37-1.45-7.45-2.58-14.13-2.58-11.45,0-20.16,6.43-20.16,19.65,0,12.54,7.92,19.89,19.17,19.89a19.52,19.52,0,0,0,6.71-.86V53h-9.39V42.3h22.67Z" transform="translate(-5.98 -12.62)"/><path class="cls-3" d="M214.71,16.36V39.73h22.65V16.36h13.73V77.1H237.36V51.69H214.71V77.1H201V16.36Z" transform="translate(-5.98 -12.62)"/><path class="cls-3" d="M274.79,27.89H258.4V16.36h46.75V27.89H288.52V77.1H274.79Z" 
       transform="translate(-5.98 -12.62)"/>
       <path class="cls-3" d="M318.48,67.73a4.69,4.69,0,1,1-4.66,4.67A4.7,4.7,0,0,1,318.48,67.73Z" 
       transform="translate(-5.98 -12.62)"/>
       <path class="cls-3" 
       d="M379.17,13.12V63.93c0,5,.17,10.22.36,13.17H367.34l-.57-6.46h-.19c-2.78,5-8.12,7.46-13.81,7.46-10.41,0-18.83-8.94-18.83-22.65C333.88,40.64,343.18,32,353.68,32c5.45,0,9.62,1.94,11.6,5h.18V13.12Zm-13.71,38.6a14,14,0,0,0-.18-2.49,8.14,8.14,0,0,0-7.95-6.7c-6.29,0-9.47,5.57-9.47,12.52,0,7.42,3.66,12.11,9.37,12.11a8.1,8.1,0,0,0,7.94-6.57,13.84,13.84,0,0,0,.29-3.1Z" transform="translate(-5.98 -12.62)"/><path class="cls-3" d="M400.73,59.46c.41,5.69,6,8.39,12.43,8.39A36.67,36.67,0,0,0,425.3,66l1.85,9.28a42.78,42.78,0,0,1-16,2.79c-14.94,0-23.52-8.7-23.52-22.45,0-11.2,7-23.6,22.23-23.6,14.3,0,19.7,11.12,19.7,22a26.5,26.5,0,0,1-.49,5.43Zm16.1-9.4c0-3.3-1.45-8.94-7.69-8.94-5.79,0-8.14,5.3-8.52,8.94Z" transform="translate(-5.98 -12.62)"/>
       <path class="cls-3" d="M447.43,33l5.93,20.52c1.08,3.72,1.84,7.19,2.53,10.72h.29c.68-3.64,1.44-6.93,2.44-10.72L464.28,33H478.7L462.28,77.1H448.59L432.56,33Z" 
   transform="translate(-5.98 -12.62)"/></g></g></g></svg>
       </a>
<Nav pageView={pageView} setPageView={setPageView}  />
</div>
        </section>
  )
}

export default Landing