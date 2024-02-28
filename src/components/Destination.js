import { Height } from "@mui/icons-material";
import React from "react";

function Destination() {
  return (
    <div className='section-width'>
    <div className='section-padding'>
    <div className="parent-div">
      {/* Country 1 */}
      <div class="card">
        <img
          src="/Images/mauritius.png"
          class="card-img-top"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            MAURITIUS
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
            Mauritius, an Indian Ocean island nation, is known for its beaches,
            lagoons and reefs. The mountainous interior includes Black River
            Gorges National Park, with rainforests, waterfalls, hiking trails
            and wildlife like the flying fox. Capital Port Louis has sites such
            as the Champs de Mars horse track, Eureka plantation house{" "}
          </p>
        </div>
        {/* <center>
          <a href="mauritius" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      {/* Country 2 */}
      <div class="card">
        <img
          src="/Images/srilanka.png"
          class="card-img-top"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            SRI LANKA
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
            Sri Lanka, historically known as Ceylon and officially the
            Democratic Socialist Republic of Sri Lanka, is an island country in
            South Asia. It lies in the Indian Ocean, southwest of the Bay of
            Bengal, separated from the Indian peninsula by the Gulf of Mannar
            and the Palk Strait.
          </p>
        </div>
        {/* <center>
          <a href="srilanka" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      {/* Country 3 */}
      <div class="card">
        <img src="/Images/uae.png" class="card-img-top" alt="Image not found" />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            UAE
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
            The United Arab Emirates, or simply the Emirates, is a country in
            West Asia, in the Middle East. It is located at the eastern end of
            the Arabian Peninsula and shares borders with Oman and Saudi Arabia,
            while also having maritime borders in the Persian Gulf with Qatar
            and Iran.{" "}
          </p>
        </div>
        {/* <center>
          <a href="uae" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      {/* Country 4 */}
      <div class="card">
        <img
          src="/Images/indonesia.png"
          class="card-img-top"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            INDONESIA
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
            Indonesia, officially the Republic of Indonesia, is a country in
            Southeast Asia and Oceania between the Indian and Pacific oceans. It
            consists of over 17,000 islands, including Sumatra, Java, Sulawesi,
            and parts of Borneo and New Guinea.
          </p>
        </div>
        {/* <center>
          <a href="indonesia" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
      {/* Country 5 */}
      <div class="card">
        <img
          src="/Images/china.png"
          class="card-img-top"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            CHINA
          </h5>
          <p class="card-text" style={{ textAlign: "justify" }}>
            China, officially the People's Republic of China, is a country in
            East Asia. With a population exceeding 1.4 billion, it is the
            world's second-most-populous country. China spans the equivalent of
            five time zones and borders fourteen countries by land.
          </p>
        </div>
        {/* <center>
          <a href="china" class="btn btn-primary">
            More
          </a>
        </center> */}
      </div>
    </div>
    </div>
  </div>
  
  );
}

export default Destination;
