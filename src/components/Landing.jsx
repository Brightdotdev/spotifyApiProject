import React from 'react'

const Landing = () => {
    const landingTransitions = [
        "YOUR TOP ARTISTS ON SPOTIFY!","YOUR MOST LISTENED SONGS ON SPOTIFY!", "SPOTIFY'S TOP ARTISTS"
        , "SPOTIFY'S TOP SONGS IN YOUR REGION"
    ]
  return (
    <main className='flex  w-[95%] gap-4 items-center justfy-between flex-wrap'>
        <section className="flex flex-col w-[55%] gap-4 items-start  justfy-center">
            <h1 className="text-6xl max-w-[50%] leading-[4rem] text-spotifyGreen font-helveticaThick">DISCOVER <span className='font-helveticaThick text-spotifyWhiteText'>YOUR TOP ARTISTS ON SPOTIFY!</span></h1>
            <p class="text-lg mb-8 text-secondaryText font-helveticaMedium">OR Log in to see your top songs, artists, and personalized playlists.</p>
            <div className="flex gap-[2rem]">
                <button className='bg-spotifyGreen  p-4 font-helveticaMedium text-spotifyWhiteText rounded-full transform transition-all duration-700 hover:scale-100 drop-shadow-normalShadow hover:drop-shadow-extrahadow' >Who’s Spotify’s #1 Artist?"</button>
                <button className='text-spotifyWhiteText font-helveticaMedium  shadow-spotifyWhiteText shadow-sm border-dotted border rounded-full p-4'>Show Me My Top Artists! <span className='text-xs' >(Log in required)</span></button>
            </div>
        </section>

    </main>
  )
}

export default Landing