import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
    <div className="section_width">
      <div className="section-padding">
      <div className="parent-div">
        <div class="card">
          <img
            src="/Images/price.png"
            class="card-img-top"
            alt="Image not found"
          />
          <div class="card-body">
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Best Price
            </h5>
            <p class="card-text" style={{ textAlign: "justify" }}>
              We offers best prices, creative and innovative ideas to allow the
              maximum enjoyment. We always work thinking of you, of your needs,
              but above all, of your expectations.
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="/Images/airplaneFlying.png"
            class="card-img-top"
            alt="Image not found"
          />
          <div class="card-body">
            <h5 class="card-title" style={{textAlign:"center"}}>
              Travel Plans
            </h5>
            <p class="card-text" style={{ textAlign: "justify" }}>
              We know that every detail is important, and for this reason makes
              our best effort to care for all those “little things” which will
              always make the difference so that your trip will be exceptional.
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="/Images/globe.png"
            class="card-img-top"
            alt="Image not found"
          />
          <div class="card-body">
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Explorer
            </h5>
            <p class="card-text" style={{ textAlign: "justify" }}>
              Whether you’re a potential customer with a challenging project
              ahead, an existing customer checking up on our latest news, or a
              partner, or future employee looking for new opportunities, I trust
              you’ll find what you’re looking for here.
            </p>
          </div>
        </div>

        <div class="card">
          <img
            src="/Images/group.png"
            class="card-img-top"
            alt="Image not found"
          />
          <div class="card-body">
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Business Travel
            </h5>
            <p class="card-text" style={{ textAlign: "justify" }}>
              We have a clear vision of what we want to be leaders in Travel
              world and we guide our business using five core values lead, grow,
              deliver, sustain and protect.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Cards;
