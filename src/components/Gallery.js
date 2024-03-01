import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <br />

      <div class="responsive">
        <div class="gallery">
          <a target="_blank" href="/Images/HajjBooking.jpg">
            <img src="/Images/HajjBooking.jpg" alt="HajjBooking" />
          </a>
          <div class="desc">Hajj Booking</div>
        </div>
      </div>

      <div class="clearfix"></div>
    </>
  );
}

export default Gallery;
