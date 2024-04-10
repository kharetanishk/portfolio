import React from 'react'
import './css/profilepage.css'
import img45 from './photos/tanishk.jpg';

export default function About() {
  return (
    <>
    <div className='about-heading'>
      <h1><u>ABOUT THIS PROJECT</u></h1>
    </div>
    <div className='about-text'>
      <h5>
        This project is made by using REACT.I had tried to copy the design of popular 
        search engine -"google". This project is distributed into 2 segments, the first one is the
        search page and the other one is the index page.In the video section I had used the third
        party library "ReactPlayer" and the images used are of local files imported locally.I had referred 
        sites like www3.schools and geeksforgeeks and several youtube channels for the completion of this 
        project.Special thanks to my friend "Chetan Vaswani" who guided me in the project and helped me to 
        achieve the completion.Thanks to everyone who explored my mini-react application.<br/>
        <br/>
        </h5>
        </div>
        <div className='footer-about'>
        <h3>TANISHK KHARE</h3>
        </div>
        <img  className='image'src={img45} alt='photos'></img>
    </>
  )
}
