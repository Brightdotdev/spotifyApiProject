import React from 'react'
import spotifyLogo from "/SpotifyAssets/spotifyWhiteLogo.svg"
const Header = () => {
  return (
    <header className='w-[95%] flex rounded-full justify-between items-center h-[4rem] bg-bgTransparent p-2'>
    <button className="w-[9rem] flex p-2 bg-spotifyWhiteText rounded-full items-center justify-start">
    <svg xmlns="http://www.w3.org/2000/svg"  className='w-[15rem]'
     viewBox="0 0 568.81 141.63"><defs>
    </defs><g id="Layer_2" data-name="Layer 2"><g id="logo">
        <polygon id="sideRectangle" points="106.97 119.76 0 141.63 0 0 106.97 24.99 106.97 119.76"/>
        <g id="logoBright"><path className="cls-1" d="M72.87,68.08a18.12,18.12,0,0,1,1.67,27.46,17.79,17.79,0,0,1-13,5.51l-33.8.08V95.72h2.69V76.31H27.94V72.48H25.87V66.37h2.07V62.58h2.47V43.35H27.85V37.94H58.26a17.8,17.8,0,0,1,13.12,5.59,18.19,18.19,0,0,1,5.54,13.2A18,18,0,0,1,72.87,68.08ZM45.72,67.6H43.26v-.84H40.53V64.87h-3.7v1.89H34.06v.84H31.64v3.7h2.42v.83h2.77V74h3.7V72.13h2.73V71.3h2.46Zm1.28-5h3.43v.05H55A5.11,5.11,0,0,0,58.83,61a5.24,5.24,0,0,0,1.59-3.87,5.39,5.39,0,0,0-1.59-3.88A5.25,5.25,0,0,0,55,51.67H47ZM58.09,87.45A5.12,5.12,0,0,0,62,85.82,5.23,5.23,0,0,0,63.54,82a5.55,5.55,0,0,0-5.45-5.46H47v11Z"/>
        <path className="cls-1" d="M173.81,95.68v5.41H151.59V95.68L145,84.32H134.73V95.68h2.07v5.41H116V95.68h2.2V83.09h-2.38V79.7H114V74.29h1.85V70.9h2.38V43.4H116V38h28.78a22.33,22.33,0,0,1,16.37,6.83,23.09,23.09,0,0,1-.66,33.4l10.21,17.47ZM131.56,75.39h-2.15v-.75H127V73h-3.3v1.67h-2.42v.75h-2.16v3.26h2.16v.74h2.42v1.68H127V79.39h2.42v-.74h2.15ZM145,70a8.73,8.73,0,0,0,6.42-2.6A8.45,8.45,0,0,0,154.1,61,9.19,9.19,0,0,0,145,51.93H134.73V70Z"/><path className="cls-1" d="M198.23,66.85v5.42h-.93v3.38h-2.15v20h2.11v5.41H176.09V95.68h2.51v-20h-1.23V72.27h-1.85V66.85h1.85V63.46h1.23V43.4h-2.51V38H197.3V43.4h-2.15V63.46h2.15v3.39Zm-5.11,1.06H191v-.75H188.5V65.49h-3.26v1.67h-2.46v.75h-2.16v3.25h2.16v.75h2.46v1.68h3.26V71.91H191v-.75h2.15Z"/><path className="cls-1" d="M270.52,66.76v2.38a30.91,30.91,0,0,1-9.33,22.62A31.72,31.72,0,0,1,207.6,75.65h-1.9V72.22h-1.85v-5.5h1.85V63.29h1.76a31.72,31.72,0,0,1,53.65-16.86l-11.8,11.75a15,15,0,0,0-10.65-4.27,14.34,14.34,0,0,0-8.31,2.56,14.7,14.7,0,0,0-5.55,6.82h1.1v3.43h.88v5.5h-.88v3.43h-.79A14.83,14.83,0,0,0,230.7,82a14.42,14.42,0,0,0,8,2.37A14.08,14.08,0,0,0,251,78H237.08V74.91h-1.85v-5h1.85V66.76Zm-48.89,1.06h-2.2v-.75H217V65.36h-3.3v1.71H211.2v.75h-2.15v3.3h2.15v.75h2.47v1.72H217V71.87h2.46v-.75h2.2Z"/><path className="cls-1" d="M331.38,76.14V95.68h2.42v5.41H312.59V95.68h2.2V77h-20V95.63h2.34v5.42h-2.34v0H278.22v0h-2.34V95.63h2.34v-20h-2.6V72.22h-1.8V66.81h1.8V63.42h2.6v-20h-2.47V38H297V43.4h-2.2V60.47h20V43.4h-2.2V38H333.8V43.4h-2.42V63.9h2.42v3.39h1.8V72.7h-1.8v3.44Zm-20.33-9.07h-2.16v-.75h-2.47V64.65h-3.25v1.67H300.7v.75h-2.15v3.26h2.15v.75h2.47v1.67h3.25V71.08h2.47v-.75h2.16Z"/><path className="cls-1" d="M393.15,43v5.42h-2v6H374.41V63h2.9v3.83h1v6.08h-1v3.82h-2.9V95.68h2.86v5.41H355.09V95.68h2.72V76.75h-3V72.93h-2.07V66.85h2.07V63h3V54.44H341.44v-6h-2V43h2V38h49.69V43ZM372.56,68h-2.42V67.2h-2.78V65.36h-3.69V67.2h-2.73V68h-2.42v3.7h2.42v.83h2.73v1.9h3.69v-1.9h2.78v-.83h2.42Z"/><path className="cls-1" d="M408.59,91.72a4.69,4.69,0,1,1-4.66,4.66A4.7,4.7,0,0,1,408.59,91.72Z"/><path className="cls-1" d="M469.28,37.11v50.8c0,5,.17,10.23.36,13.18H457.45l-.58-6.46h-.19c-2.77,5-8.11,7.45-13.8,7.45-10.41,0-18.83-8.94-18.83-22.65C424,64.62,433.29,56,443.79,56c5.45,0,9.62,1.94,11.6,5h.18V37.11ZM455.57,75.7a13.87,13.87,0,0,0-.18-2.48,8.14,8.14,0,0,0-7.95-6.71c-6.29,0-9.47,5.57-9.47,12.52,0,7.43,3.66,12.12,9.37,12.12a8.1,8.1,0,0,0,7.94-6.57,14,14,0,0,0,.29-3.11Z"/><path className="cls-1" d="M490.84,83.44c.41,5.69,6,8.4,12.43,8.4A36.67,36.67,0,0,0,515.41,90l1.85,9.28a42.78,42.78,0,0,1-16,2.79c-14.94,0-23.52-8.71-23.52-22.45,0-11.21,7-23.6,22.23-23.6,14.3,0,19.69,11.11,19.69,22a25.72,25.72,0,0,1-.49,5.43Zm16.1-9.39c0-3.3-1.45-8.94-7.69-8.94-5.79,0-8.14,5.29-8.52,8.94Z"/>
        <path className="cls-1" d="M537.54,57l5.93,20.51c1.08,3.72,1.84,7.2,2.53,10.73h.29c.68-3.64,1.43-6.94,2.44-10.73L554.39,57h14.42l-16.43,44.11H538.7L522.67,57Z"/><path className="cls-2" d="M72.87,68.08a18.12,18.12,0,0,1,1.67,27.46,17.79,17.79,0,0,1-13,5.51l-33.8.08V95.72h2.69V76.31H27.94V72.48H25.87V66.37h2.07V62.58h2.47V43.35H27.85V37.94H58.26a17.8,17.8,0,0,1,13.12,5.59,18.19,18.19,0,0,1,5.54,13.2A18,18,0,0,1,72.87,68.08ZM45.72,67.6H43.26v-.84H40.53V64.87h-3.7v1.89H34.06v.84H31.64v3.7h2.42v.83h2.77V74h3.7V72.13h2.73V71.3h2.46Zm1.28-5h3.43v.05H55A5.11,5.11,0,0,0,58.83,61a5.24,5.24,0,0,0,1.59-3.87,5.39,5.39,0,0,0-1.59-3.88A5.25,5.25,0,0,0,55,51.67H47ZM58.09,87.45A5.12,5.12,0,0,0,62,85.82,5.23,5.23,0,0,0,63.54,82a5.55,5.55,0,0,0-5.45-5.46H47v11Z"/><path d="M173.81,95.68v5.41H151.59V95.68L145,84.32H134.73V95.68h2.07v5.41H116V95.68h2.2V83.09h-2.38V79.7H114V74.29h1.85V70.9h2.38V43.4H116V38h28.78a22.33,22.33,0,0,1,16.37,6.83,23.09,23.09,0,0,1-.66,33.4l10.21,17.47ZM131.56,75.39h-2.15v-.75H127V73h-3.3v1.67h-2.42v.75h-2.16v3.26h2.16v.74h2.42v1.68H127V79.39h2.42v-.74h2.15ZM145,70a8.73,8.73,0,0,0,6.42-2.6A8.45,8.45,0,0,0,154.1,61,9.19,9.19,0,0,0,145,51.93H134.73V70Z"/><path d="M198.23,66.85v5.42h-.93v3.38h-2.15v20h2.11v5.41H176.09V95.68h2.51v-20h-1.23V72.27h-1.85V66.85h1.85V63.46h1.23V43.4h-2.51V38H197.3V43.4h-2.15V63.46h2.15v3.39Zm-5.11,1.06H191v-.75H188.5V65.49h-3.26v1.67h-2.46v.75h-2.16v3.25h2.16v.75h2.46v1.68h3.26V71.91H191v-.75h2.15Z"/><path d="M270.52,66.76v2.38a30.91,30.91,0,0,1-9.33,22.62A31.72,31.72,0,0,1,207.6,75.65h-1.9V72.22h-1.85v-5.5h1.85V63.29h1.76a31.72,31.72,0,0,1,53.65-16.86l-11.8,11.75a15,15,0,0,0-10.65-4.27,14.34,14.34,0,0,0-8.31,2.56,14.7,14.7,0,0,0-5.55,6.82h1.1v3.43h.88v5.5h-.88v3.43h-.79A14.83,14.83,0,0,0,230.7,82a14.42,14.42,0,0,0,8,2.37A14.08,14.08,0,0,0,251,78H237.08V74.91h-1.85v-5h1.85V66.76Zm-48.89,1.06h-2.2v-.75H217V65.36h-3.3v1.71H211.2v.75h-2.15v3.3h2.15v.75h2.47v1.72H217V71.87h2.46v-.75h2.2Z"/><path d="M331.38,76.14V95.68h2.42v5.41H312.59V95.68h2.2V77h-20V95.63h2.34v5.42h-2.34v0H278.22v0h-2.34V95.63h2.34v-20h-2.6V72.22h-1.8V66.81h1.8V63.42h2.6v-20h-2.47V38H297V43.4h-2.2V60.47h20V43.4h-2.2V38H333.8V43.4h-2.42V63.9h2.42v3.39h1.8V72.7h-1.8v3.44Zm-20.33-9.07h-2.16v-.75h-2.47V64.65h-3.25v1.67H300.7v.75h-2.15v3.26h2.15v.75h2.47v1.67h3.25V71.08h2.47v-.75h2.16Z"/><path d="M393.15,43v5.42h-2v6H374.41V63h2.9v3.83h1v6.08h-1v3.82h-2.9V95.68h2.86v5.41H355.09V95.68h2.72V76.75h-3V72.93h-2.07V66.85h2.07V63h3V54.44H341.44v-6h-2V43h2V38h49.69V43ZM372.56,68h-2.42V67.2h-2.78V65.36h-3.69V67.2h-2.73V68h-2.42v3.7h2.42v.83h2.73v1.9h3.69v-1.9h2.78v-.83h2.42Z"/><path d="M408.59,91.72a4.69,4.69,0,1,1-4.66,4.66A4.7,4.7,0,0,1,408.59,91.72Z"/><path d="M469.28,37.11v50.8c0,5,.17,10.23.36,13.18H457.45l-.58-6.46h-.19c-2.77,5-8.11,7.45-13.8,7.45-10.41,0-18.83-8.94-18.83-22.65C424,64.62,433.29,56,443.79,56c5.45,0,9.62,1.94,11.6,5h.18V37.11ZM455.57,75.7a13.87,13.87,0,0,0-.18-2.48,8.14,8.14,0,0,0-7.95-6.71c-6.29,0-9.47,5.57-9.47,12.52,0,7.43,3.66,12.12,9.37,12.12a8.1,8.1,0,0,0,7.94-6.57,14,14,0,0,0,.29-3.11Z"/><path d="M490.84,83.44c.41,5.69,6,8.4,12.43,8.4A36.67,36.67,0,0,0,515.41,90l1.85,9.28a42.78,42.78,0,0,1-16,2.79c-14.94,0-23.52-8.71-23.52-22.45,0-11.21,7-23.6,22.23-23.6,14.3,0,19.69,11.11,19.69,22a25.72,25.72,0,0,1-.49,5.43Zm16.1-9.39c0-3.3-1.45-8.94-7.69-8.94-5.79,0-8.14,5.29-8.52,8.94Z"/>
     <path d="M537.54,57l5.93,20.51c1.08,3.72,1.84,7.2,2.53,10.73h.29c.68-3.64,1.43-6.94,2.44-10.73L554.39,57h14.42l-16.43,44.11H538.7L522.67,57Z"/></g></g></g></svg>
    </button>

<button className="p-2 w-[9rem] h-[3rem] flex items-center justify-center rounded-full bg-spotifyGreen">
    <img src={spotifyLogo} alt="" />
</button>
    </header>
  )
}

export default Header