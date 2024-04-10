import React, {useEffect, useState} from 'react'
import './css/profilepage.css'
import googleLogo from './images/google.png'
import All from './All'
import Images from './Images'
import Videos from './Videos'
import Map from './Map'
import About from './About'



export default function Index({props, name}) {
  const [currCategory, setCurrCategory] = useState('All')

  useEffect(() => {
    document.querySelector(`.${currCategory}`).classList.add('active')
  }, [currCategory] )

  return (
    <>
      <IndexHeader name={name} currCategory={currCategory} setCurrCategory={setCurrCategory} />
      {
        currCategory === 'All' ? <All /> : 
        currCategory === 'Images' ? <Images /> :
        currCategory === 'Videos' ? <Videos /> :
        currCategory === 'Maps'? <Map/>:
        currCategory === 'About'?<About/>:false
      }
    </>
  )
}

function IndexHeader({props, name, currCategory, setCurrCategory}){

  const changeCategory = (event) => {
    const clickedCategory = event.target.innerHTML;
    document.querySelector(`.${currCategory}`).classList.remove('active')
    console.log(document.querySelector(`.${currCategory}`))
    setCurrCategory(clickedCategory)
  }

  return (
    <>
      <div className='container'>
      <div className='icon'>
        <img src={googleLogo} alt='logo' className='logo' />
      </div>
        <div className='search-bar'>
        <b>{name}</b>
          <i class="bi bi-search"></i>
        </div>
      </div>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='All'>
          <p className='nav-content'onClick={changeCategory}>All</p>
          </div>
          <div className='Images'>
          <p className='nav-content' onClick={changeCategory}>Images</p>
          </div>
          <div className='Videos'>
          <p className='nav-content' onClick={changeCategory}>Videos</p>
          </div>
          <div className='Maps'>
          <p className='nav-content' onClick={changeCategory}>Maps</p> 
          </div>
          <div className='About'>
            <p className='nav-content'onClick={changeCategory}>About</p>
          </div>
        </div>
      </nav>
    </>
  )
}