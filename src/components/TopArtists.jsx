import React, { useState,useEffect } from 'react'
import spotifyBlackLogo from "/SpotifyAssets/blackSpotifyIcon.svg"



const Artists = [
  {
    name: "Taylor Swift",
    monthlyListeners: "100.2M",
    followers: "122.5M",
    genres: ["Pop", "Country pop", "Indie pop"],
    topSong: "Cruel Summer",
    bio: "Taylor Swift is an American singer-songwriter. Her narrative songwriting, which often centers around her personal life, has received widespread critical praise and media coverage.",
  },
  {
    name: "The Weeknd",
    monthlyListeners: "85.4M",
    followers: "98.7M",
    genres: ["R&B", "Pop", "Alternative R&B"],
    topSong: "Blinding Lights",
    bio: "Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer-songwriter and record producer. He is known for his versatile singing style and unique musical style.",
  },
  {
    name: "Ed Sheeran",
    monthlyListeners: "84.1M",
    followers: "112.3M",
    genres: ["Pop", "Folk-pop", "Acoustic pop"],
    topSong: "Shape of You",
    bio: "Edward Christopher Sheeran is an English singer-songwriter. He has sold more than 150 million records worldwide, making him one of the world's best-selling music artists.",
  },
  {
    name: "Drake",
    monthlyListeners: "82.7M",
    followers: "88.9M",
    genres: ["Hip hop", "Rap", "R&B"],
    topSong: "One Dance",
    bio: "Aubrey Drake Graham is a Canadian rapper, singer, and actor. He is credited for popularizing Canadian hip hop worldwide.",
  },
  {
    name: "Bad Bunny",
    monthlyListeners: "81.3M",
    followers: "75.6M",
    genres: ["Reggaeton", "Latin trap", "Pop"],
    topSong: "Tití Me Preguntó",
    bio: "Benito Antonio Martínez Ocasio, known professionally as Bad Bunny, is a Puerto Rican rapper and singer. He is known for his deep, slurred vocal style and his eclectic musical style.",
  },
  {
    name: "Miley Cyrus",
    monthlyListeners: "78.9M",
    followers: "82.4M",
    genres: ["Pop", "Pop rock", "Dance-pop"],
    topSong: "Flowers",
    bio: "Miley Ray Cyrus is an American singer, songwriter, and actress. Known for her distinctive raspy voice, her music spans across multiple genres including pop, rock, and country pop.",
  },
  {
    name: "Justin Bieber",
    monthlyListeners: "78.2M",
    followers: "93.8M",
    genres: ["Pop", "R&B", "Dance-pop"],
    topSong: "Stay",
    bio: "Justin Drew Bieber is a Canadian singer. He is recognized for his genre-melding musicianship and has played an influential role in modern-day popular music.",
  },
  {
    name: "Ariana Grande",
    monthlyListeners: "77.5M",
    followers: "91.2M",
    genres: ["Pop", "R&B", "Trap-pop"],
    topSong: "positions",
    bio: "Ariana Grande-Butera is an American singer, songwriter, and actress. Her four-octave vocal range has received critical acclaim.",
  },
  {
    name: "Dua Lipa",
    monthlyListeners: "75.8M",
    followers: "87.3M",
    genres: ["Pop", "Dance-pop", "Electropop"],
    topSong: "Levitating",
    bio: "Dua Lipa is an English singer and songwriter. Her disco-influenced pop music has earned her multiple awards including Grammy Awards.",
  },
  {
    name: "Rihanna",
    monthlyListeners: "74.6M",
    followers: "89.5M",
    genres: ["Pop", "R&B", "Hip hop"],
    topSong: "Diamonds",
    bio: "Robyn Rihanna Fenty is a Barbadian singer, actress, and businesswoman. She is known for her versatile musical style and has influenced multiple genres of music.",
  }
];



// Function to get the OAuth token from Spotify
const getSpotifyToken = async () => {
            try {
              const response = await fetch("https://accounts.spotify.com/api/token", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                      Authorization: `Basic ${btoa(import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_CLIENT_SECRET)}`,
                  },
                  body: "grant_type=client_credentials",
              });
      
              if (!response.ok) {
                  const errorData = await response.json();
                  throw new Error(`Error ${response.status}: ${errorData.error_description}`);
              }
      
              const data = await response.json();
              return data.access_token;  // Return the token to be used in further API requests
          } catch (error) {
              console.error("Failed to fetch Spotify token:", error);
          }
        };
        
        
        

          const ArtistCardLoading = () =>{
  
  return(
    <article className="flex sm:flex-row flex-col bg-spotifyBlack gap-2 md:justify-between rounded-lg items-center p-2 h-[30rem] w-[95vw] sm:h-[18rem]  lg:h-[25rem]
     md:w-[90vw]">

    <div className="w-[100%] sm:w-[35%] sm:h-[100%] h-[45%] flex sheenEffect items-center object-cover justify-center">
   
    </div>

    <div className="flex flex-col items-start justify-start  w-[100%] h-[53%] sm:h-[100%] sm:w-[65%] sm:p-2">
      
    <div className="rounded-full lg:w-[30rem] md:w-[20rem] w-[18rem] h-[4rem] sheenEffect">
   
    </div>
    
    <div className=" md:w-[15rem] w-[12rem] h-[3rem] rounded-full sheenEffect mt-2 sm:mt-4">
    </div>

   
    <div className=" md:w-[15rem] w-[12rem] h-[3rem] rounded-full sheenEffect mt-1">
  
    </div>
    <div className=" md:w-[15rem] w-[12rem] h-[3rem] rounded-full sheenEffect mt-2 md:mt-3">


    </div>

    <div className=" md:w-[15rem] w-[12rem] h-[3rem] rounded-full sheenEffect  mt-2 sm:mt-4 ">
 
    </div>
     

    <div className=" md:w-[15rem] w-[12rem] h-[3rem] rounded-full sheenEffect mt-1">

    </div>
     


     <button className="bg-spotifyWhiteText rounded-full md:w-[12rem] sm:mt-4 xl:w-[14rem] w-[11rem] lg:mt-10  md:mt-4 mt-2 flex items-center p-1 xl:gap-3 gap-1">
    <img src={spotifyBlackLogo} alt="Spotify Icon" className='lg:w-[3rem] w-[2rem]' />
    
      <a href="@wheretheretoBe" target='blank' className="text-spotifyBlack font-helveticaMedium font-semibold xl:text-sm text-xs">
      LISTEN ON SPOTIFY
      </a>
    
      </button>
    </div>
           </article>    
  )
}






const ArtistCard = ({userData}) =>{
  
  
  
  const summary = userData.bio.substring(0,149);
  
  
  return(
    <article className="flex sm:flex-row flex-col bg-spotifyBlack gap-2 md:justify-between rounded-lg items-center p-2 h-[30rem] w-[95vw] sm:h-[18rem]  lg:h-[25rem]
     md:w-[90vw]">

    <div className="w-[100%] sm:w-[35%] sm:h-[100%] h-[45%] flex items-center object-cover justify-center">
    <img src={userData.userImage? userData.userImage : "https://th.bing.com/th/id/OIP.vRaXcGnuiE4Ezlebo7SXZgHaHa?rs=1&pid=ImgDetMain" } alt="" className='w-[100%] h-[100%] object-cover rounded-[2px] md:rounded-[4px]' />
    </div>

    <div className="flex flex-col items-start justify-start  w-[100%] h-[53%] sm:h-[100%] sm:w-[65%] sm:p-2">
      
    <h5 className="lg:text-6xl text-3xl font-helveticaThick text-spotifyWhiteText">
      {userData.name}
    </h5>
    
    <p className="lg:text-lg text-sm font-sans text-spotifyWhiteText mt-1 sm:mt-2">
    {userData.followers + " People follow me...to where?...idk too"}
    </p>

   
    <p className="lg:text-lg text-sm font-sans  text-spotifyWhiteText">
    {userData.monthlyListeners + " people listen to me....MONTHLY"} 
    </p>
    <p className="lg:text-lg text-sm  font-sans text-spotifyWhiteText mt-1 md:mt-2">

   <>
   {summary} 
   <a href='#' className='font-sans text-secondaryText cursor-pointer'> read more </a>
   </>
    </p>

    <p className="lg:text-lg text-sm font-sans text-spotifyWhiteText mt-2 sm:mt-6 ">
    {userData.topSong}
    </p>
     

    <p className="lg:text-lg text-sm font-sans text-spotifyWhiteText">
    {userData.genres.map(genre =>(
      <>
      {" " + genre + " "}
      </>
    ))}    </p>
     


     <button className="bg-spotifyWhiteText rounded-full md:w-[12rem] sm:mt-4 xl:w-[14rem] w-[11rem] lg:mt-10  md:mt-4 mt-2 flex items-center p-1 xl:gap-3 gap-1">
    <img src={spotifyBlackLogo} alt="Spotify Icon" className='lg:w-[3rem] w-[2rem]' />
    
      <a href="@wheretheretoBe" target='blank' className="text-spotifyBlack font-helveticaMedium font-semibold xl:text-sm text-xs">
      LISTEN ON SPOTIFY
      </a>
    
      </button>
    </div>
           </article>    
  )
}

const TopArtists = () => {
  const [isLoading,setLoading] = useState(true);
  const [topArtists, setTopArtist] = useState([]);
  const [token, setToken] = useState("");
  const [error,setError] = useState(null)
  


/* 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const token = await getSpotifyToken();
        if (!token) {
          throw new Error("No token received");
        }

        // Fetch popular artists
        const response = await fetch("https://api.spotify.com/v1/search?q=artist&type=artist&limit=15", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }

        const data = await response.json();
        const artists = data.artists.items;

        // Fetch details for each artist to get monthly listeners
        const artistsWithListeners = await Promise.all(
           artists.map(async (artist) => {
            try {
              const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artist.id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              if (!artistResponse.ok) {
                throw new Error(`Failed to fetch details for artist: ${artist.name}`);
              }

              return artistResponse.json();
            } catch (error) {
              console.error(error);
              return null; // Return null for any errors
            }
          })
        );

        // Filter out any null responses
        const validArtists = artistsWithListeners.filter(Boolean);

        // Sort artists by monthly listeners
        validArtists.sort((a, b) => b.followers.total - a.followers.total);

        // Get the top 10 artists
        const topTenArtists = validArtists.slice(0, 10);
        setTopArtist(topTenArtists);
        console.log(topTenArtists,topArtists)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
      finally{ 
        setLoading(false)
      }
    };

    fetchData();
    }

  , []);
   */




  useEffect(() =>{
   const timeOut =setTimeout(()=>{
      setLoading(false)
    }
  ,1500)
return () => clearTimeout(timeOut)
  },[])
  return (
    <section className='w-screen h-screen p-2 flex flex-col items-center gap-4 justify-between'>
<h2 className="md:text-5xl sm:text-3xl text-xl self-start sm:pl-4 font-helveticaThick flex-1 text-spotifyWhiteText">
        HERE ARE THE TOP SPOTIFY ARTIST'S
      </h2>






<div className="flex overflow-auto w-screen h-screen p-2 items-center flex-col scrollable">



      <div className="flex flex-col scrollable gap-4 p-2">
    
{
isLoading ? Array.from({length : 10}).map((_,index) =>(
  <ArtistCardLoading key={index + 1}/>
))
:(
  Artists.map((user,index) =>(
  <ArtistCard key={index+1} userData={user}/>

)))
}    
    

<p>You have reached the end </p>
      </div>


</div>
    </section>
  )
}

export default TopArtists