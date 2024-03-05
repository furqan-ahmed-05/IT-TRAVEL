import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <>
      <div className="social">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          href="https://www.facebook.com/ITAirTravelsTours?mibextid=ZbWKwL"
          className="fa fa-facebook"
        ></a>
        <a
          href="https://youtube.com/@itairtraveltours953?si=ZlQUy4acf2R8pANN"
          className="fa fa-youtube"
        ></a>
        <a
          href="https://www.instagram.com/itairtravelsandtours?igsh=dm9rbTF6Y3VlNmtu"
          className="fa fa-instagram"
        ></a>
      </div>
    </>
  );
}

export default SocialMedia;
