import React from 'react'
import ReactPlayer from 'react-player'
import './css/video.css'
import video1 from './videos/video1.mp4'
import video2 from './videos/video2.mp4'
import video3 from './videos/video3.mp4'
// import video4 from './videos/video4.mp4'
import video5 from './videos/video5.mp4'
import dance from './photos/dance.jpeg';
import dance2 from './photos/dance2.png';


export default function Videos() {
  return (
  <>
    <Videoplayer/>
    <br/>
    <Videoplayer2/>
    <br/>
    <Videoplayer3/>
    <br/>
    <Videoplayer5/>
  </>
  )
}
function Videoplayer(){
  return(
    <>
    <div className='video-heading'>
    SHRI SHANKARCHARYA DANCE PERFORMANCE
    </div>
    <div className='video-container'>
    <div>
      <ReactPlayer  className='video-box' url={video1} controls={true} playing={false} light={dance}/>
    </div>
    <div className='video-text'>
      This is a dance performance of college fest<br/>
      Music:"ISKI USKI"<br/>
      Venue:"SHRI SHANKARCHARYA MAHAVIDAYLAYA"
    </div>
  </div>
    </>
  )
}
function Videoplayer2(){
  return(
    <>
        <div className='video-heading'>
    SHRI SHANKARCHARYA DANCE PERFORMANCE
    </div>
    <div className='video-container'>
    <div>
      <ReactPlayer className='video-box' url={video2} controls={true} playing={false} light={dance2}/>
    </div>
    <div className='video-text'>
      This is a dance performance of college fest<br/>
      Music:"Ranjhana"<br/>
      Venue:"SHRI SHANKARCHARYA MAHAVIDAYLAYA"
    </div>
  </div>

    </>
  )
}
function Videoplayer3(){
  return(
    <>
            <div className='video-heading'>
    SHRI SHANKARCHARYA DANCE PERFORMANCE
    </div>
    <div className='video-container'>
    <div>
      <ReactPlayer className='video-box' url={video3} controls={true} playing={false} light={false}/>
    </div>
    <div className='video-text'>
      This is a dance performance of college fest<br/>
      Music:"Desi Boys"<br/>
      Venue:"SHRI SHANKARCHARYA MAHAVIDAYLAYA"
    </div>
  </div>
    </>
  )
}
function Videoplayer5(){
  return(
    <>
     <div className='video-heading'>
    PONDICHERRY BEACH
    </div>
    <div className='video-container'>
    <div>
      <ReactPlayer className='video-box' url={video5} controls={true} playing={false} light={false}/>
    </div>
    <div className='video-text'>
      The clip is of "French Colony" <br/>
      Location:"PONDICHERRY TAMILNADU"
    </div>
  </div>
    
    </>
  )
}