import React from 'react'
import './css/profilepage.css'

export default function Images() {
  return (
    <>
  <div className='mapp' style={{ width: "100%" }}>
  <iframe title='property'
    width="100%"
    height={800}
    frameBorder={0}
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=durg,chattisgarh+(durg)&t=k&z=14&ie=UTF8&iwloc=B&output=embed"
  >
    &lt;a href="https://www.gps.ie/"&gt;gps vehicle tracker&lt;/a&gt;
  </iframe>
</div>
<h1 style={{textAlign:'center', color:'pink'}}><i class="bi bi-geo-alt"></i>DURG</h1>

    </>
  )
}