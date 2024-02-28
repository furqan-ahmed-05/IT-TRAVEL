import React from 'react'
import "./Gallery.css"

function Gallery() {
  return (
   <>
   <br/>
   
   {/* <div class="responsive">
  <div class="gallery">
  <a target="_blank" href="/Images/Australia.jpg">
      <img src="/Images/Australia.jpg" alt="Australia"/>
    </a>
    <div class="desc">Australia</div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="/Images/GlobalVisa.jpg">
      <img src="/Images/GlobalVisa.jpg" alt="GlobalVisa"/>
    </a>
    <div class="desc">Global Visa</div>
  </div>
</div> */}

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href="/Images/HajjBooking.jpg">
      <img src="/Images/HajjBooking.jpg" alt="HajjBooking"/>
    </a>
    <div class="desc">Hajj Booking</div>
  </div>
</div>

{/* <div class="responsive">
  <div class="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains"/>
    </a>
    <div class="desc">Add a description of the image here</div>
  </div>
</div> */}

<div class="clearfix"></div>

   </>
  )
}

export default Gallery