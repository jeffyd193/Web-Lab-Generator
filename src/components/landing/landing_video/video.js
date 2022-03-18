import React from 'react';
import "./video.css";

const LandingVideo = () => {
    return (
        <>
        <div className='video-background'>
    <div className="video-foreground">
      <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
    </div>
  </div>

<div id="vidtop-content">
<div className='vid-info'>
	  <h1>YouTube Fullscreen Background Demo</h1>
	  <p>The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.</p>
     <p>Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of http://eol.jsc.nasa.gov/</p>
	 <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
  </div>
</div>

</>
    );


  
};

export default LandingVideo;