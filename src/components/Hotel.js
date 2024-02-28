import React from 'react'
import './Hotel.css'

function Hotel() {
  return (
<>
<div className='section-width'>
  <div className='section-padding'>
<div className="parent-div">

      {/* Hotel 1 */}
      <div class="card">
        <img
          src="/Images/makkah tower.jpg"
          class="card-img-top hotel-img"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
          Clock Tower
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
          The Makkah Tower is just 300 metres away from Masjid al Haram mosque.The Clock Towers offer
          luxury accommodation, book your accommodation well in advance to secure a room and avoid paying
          higher prices.The Clock Towers offer a shuttle service to transport visitors to the Masjid 
          al-Haram. Use this service to avoid the crowds and to ensure that you arrive on time for prayer. {" "}
          </p>
        </div>
        {/* <center>
          <a href="makkah" class="btn btn-primary">
            More
          </a>
        </center> */}

      </div>
    
      {/* Hotel 2 */}
      <div class="card">
        <img
          src="/Images/Barkha Uhad Hotel.png"
          class="card-img-top hotel-img"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
          Barkha Uhad Hotel
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
          The hotel is conveniently located near some of the most iconic 
          landmarks and attractions in the city, including Al Masjid an 
          Nabawi, the second holiest mosque.
          </p>
        </div>
        {/* <center>
          <a href="barkha" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
     
      {/* Hotel 3 */}
      <div class="card">
        <img
        src="/Images//Loulou Al-Khalil Hotel.png" 
        class="card-img-top hotel-img" alt="Image not found" />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
          Loulou Al Khalil
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
          Loulou Al Khalil Hotel Mecca offers 80 rooms within 11 minutes' 
          walk of Masjid Taneem.The massive Masjid al-Haram Mosque, set within close distance of, 
          offers delectable dishes.The centre of Mecca can be reached within 20 minutes' walk of this 
          hotel. Raffles Spa is only 6 minutes' walk from the accommodation, while Prayer Hall is 
          approximately 20 minutes' walk away. {" "}
          </p>
        </div>
        {/* <center>
          <a href="alkhalil" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      
      {/* Hotel 4 */}
      <div class="card">
        <img
          src="/Images/tharawat al misfalah.png"
          class="card-img-top hotel-img"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
          Tharawat Al Misfalah
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
          Tharawat Al Misfala Hotel is a hotel in Mecca Region, Saudi Arabia. Tharawat Al Misfala Hotel i
          s situated nearby to the mosques Masjid ar-Rahman and Masjid Al Nour Al-ahliyya.
          </p>
        </div>
        {/* <center>
          <a href="tharawat" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      
      {/* Hotel 5 */}
      <div class="card">
        <img
          src="/Images/millienium hotel.png"
          class="card-img-top hotel-img"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
          Millineium Hotel
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
          The M Hotel Makkah by Millennium is a five-star luxury hotel in Mecca near Haram Situated on 
          Ibrahim Al Khalil Street, just a few minutes drive to holy mosque, 60 minutes to Jeddah airport
           and 25 minutes to the rites of pilgrimage, you’re never far from anything while staying with us. 
           Al-Masjid Al-Haram Holy Mosque is nearby, making our warm and welcoming hotel a favorite during 
           Ramadan and Hajj season. 
          </p>
        </div>
        {/* <center>
          <a href="millinineium" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
    </div>
    </div>
</div>

</> 
 )
}

export default Hotel;