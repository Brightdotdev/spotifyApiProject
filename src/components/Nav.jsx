import React,{useState} from 'react'


const Nav = ({pageView,setPageView}) => {

  

    return (
    
<nav className='flex items-center'>
  <ul className='flex md:gap-1 items-center '>
    <li>
<button onClick={() =>setPageView("termsOfUse")} className="
text-[1rem]
p-2 md:w-[9rem] md:h-[3rem]  flex items-center justify-center rounded-full 
xl:text-xl hover:underline
xl:w-[9rem]
 text-spotifyWhiteText font-helveticaMedium">
    Terms Of Use
</button>
    </li>

    <li>
<button  onClick={() =>setPageView("legalNotice")}  className="
text-[1rem]
p-2 md:w-[9rem] md:h-[3rem] flex items-center justify-center rounded-full 
xl:text-xl hover:underline
xl:w-[9rem]
 text-spotifyWhiteText font-helveticaMedium">
   Legal Notice
</button>
    </li>
    
    <li>
<button
onClick={() =>setPageView("contactUs")}
className="
text-[1rem]
p-2 md:w-[9rem] md:h-[3rem] flex items-center justify-center rounded-full 
xl:text-xl hover:underline
xl:w-[9rem]
 text-spotifyWhiteText font-helveticaMedium">
    Contact Us
</button>
    </li>
  </ul>
</nav>
  )
}

export default Nav