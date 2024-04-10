import React from 'react'
import './css/profilepage.css'



export default function Profilepage({props, setMode, name, setName}) {

  const searchBtnClicked = ()=>{
    let nameTemp = (document.getElementById('name').value).toUpperCase().trim()
    document.getElementById('name').value = ''
    if (nameTemp !== "TANISHK"){
      alert("You can only search for Tanishk!!")
      return
    }
    setName(nameTemp)
    setMode('index')
  }
  
  return (
  <>
    <div className='heading'>
      <h1 className='text'>Google</h1>
    </div>
    <div className='input'>
      <input id='name' name="name"className='inputbox' size={40} autoFocus autoComplete='off'placeholder='SEARCH TANISHK'></input>
    </div>
    <div className="btn">
      <button name="button"className='searchbtn' type='submit' onClick={searchBtnClicked}>
        SUBMIT
      </button>
    </div>
  </>
  )
}
