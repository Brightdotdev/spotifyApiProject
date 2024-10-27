import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactUs = ({pageView, setPageView}) => {
  return (
    <article className="rounded-lg shadow-2xl shadow-spotifyBlack  p-2 max-w-screen max-h-screen flex flex-col mx-auto 
    text-spotifyWhiteText overflow-hidden overflow-y-auto scrollable gap-2">
      
      <h2 className="md:text-3xl text-xl font-bold my-2 mx-auto font-helveticaThick">Hello, I'm Bright (brightdotdev, bright.dev, the4rthwall)</h2>
      
      <p className="md:text-lg font-sans text-sm mb-2">
        I'm a Software Developer and a Product Designer. Currently, I am passionate about creating engaging and user-friendly applications.
      </p>
      
      <p className="mb-2 font-sans">
        I enjoy working with technologies like React, Tailwind CSS, and Node. I'm currently learning Java and Data Science (I know it's not easy, lol)I love exploring new trends in web development and problem-solving software. In my free time, I enjoy exploring new fields, listening to music, and playing chess (although I'm really terrible at it, lol).
      </p>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-semibold font-helveticaMedium">
            FOR DEVELOPERS
        </h2>
        <p className='font-sans'>
            The github repo for this application is on my github account feel free to fork it or contribute to the repository
            (Give it a star too ✨)
        </p>
        <a target='blank'   href="https://github.com/Brightdotdev/spotifyApiProject" className='underline'>Here's the link to the repository</a>

      </div>


<div className="flex flex-col gap-2">
    
<h2 className="text-xl font-sans font-semibold">Connect with Me</h2>
      <p className="font-sans">
        Feel free to reach out if you’d like to collaborate or just say hello!
      </p>

      <div className="flex space-x-2">
        <a target='blank'   href="mailto:mail.bright.dev@gmail.com" >
          <FaEnvelope size={24} />
        </a>
        <a target='blank'   href="https://www.linkedin.com/in/akinola-bright-27b2b92a0/" >
          <FaLinkedin size={24} />
        </a>
        <a target='blank'   href="https://github.com/Brightdotdev" >
          <FaGithub size={24} />
        </a>
      </div>
      
      <a target='blank'   href="mailto:your-email@example.com" className="text-white ">
        Send Me an Email Or Drop A  Message
      </a>
</div>

<button 
onClick={() => setPageView("homePage")}
className="absolute top-[85%] 
 text-sm font-sans text-spotifyBlack font-bold
 right-[2%] w-[9rem] p-2 rounded-lg flex h-[3rem] bg-spotifyWhiteText items-center justify-center gap-2">

 BACT TO PAGE
 </button>
    </article>

  );
};

export default ContactUs;
