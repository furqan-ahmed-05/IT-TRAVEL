import React from "react";
import Cards from "./Cards";

function AboutUs() {
  return (
    <>
      <div className="section-width">
        <div className="section-padding">
          <h6 style={{ textAlign: "center" }}>ABOUT US</h6>
          <div className="abt">
            <p style={{ textAlign: "justify" }}>
              Starring its operation in 1997, Company's primary objective was to
              offer both business and leisure tourists elevated travel services.
              To become a leader in the tourism industry, the agency kept
              expanding and diversifying its areas of expertise by providing
              their clients the leading, most customized transportation options
              possible, the brand strives for perfection. A firm that nurtures
              trust with its value consumers and business partners. Having 21
              years of experience in the travel industry, significant research,
              and huge database helps uphold reputation for personalised
              services, quality, and value. It's the reason why so many of our
              clients return to us and why our projects continually win awards
              from the travel industry. We have a clear idea of what we want to
              accomplish in the travel industry. We pride ourselves on being
              innovatiove, leading and extremely effective, and we eagerly await
              the oppotunity to prove these qualities.
            </p>
          </div>

          <h3>Our Mission</h3>
          <p>
            Our mission is to inspire and empower individuals to embark on
            transformative journeys that enrich their lives. We strive to be the
            ultimate companion for every traveler, offering a seamless and
            personalized experience from dream to destination.
          </p>
          <div className="about">
            <h2 style={{ textAlign: "center" }}>Why Choose Us?</h2>
          </div>
          <p>
            We understand that the world is a vast and diverse tapestry of
            experiences waiting to be explored. When it comes to choosing the
            right travel companion, here's why we stand out:
          </p>
          <div className="sub-about">
            <h5>Reliable Information</h5>
            <p>
              Your journey starts with reliable information. We provide
              up-to-date and accurate details on destinations, accommodations,
              activities, and more. Our commitment to accuracy ensures you can
              plan your trip with confidence, knowing you have the most current
              and trustworthy information at your fingertips.
            </p>
            <h5>Personalized Planning</h5>
            <p>
              We understand that every traveler is unique. Our platform offers
              intuitive tools and personalized recommendations to tailor your
              journey to your preferences. From flexible itineraries to insider
              tips, we empower you to create a trip that suits your individual
              tastes and interests.
            </p>
            <h5>User-Friendly Interface</h5>
            <p>
              Navigating through the world of travel planning should be a joy,
              not a hassle. Our user-friendly interface ensures a seamless and
              enjoyable experience from the moment you start dreaming about your
              next adventure to the time you return home with a lifetime of
              memories.
            </p>
            <h5>Customer Support</h5>
            <p>
              Your satisfaction is our priority. Our dedicated customer support
              team is ready to assist you at every step of your journey. Whether
              you have questions about destinations, need assistance with
              bookings, or require travel advice, we're here for you.
            </p>
          </div>

          <div className="about">
            <h2 style={{ textAlign: "center" }}>Meet Our Team</h2>
          </div>
          <p>
            We are more than just a platform for travel enthusiasts; we are a
            team of passionate individuals united by a shared love for
            exploration and a commitment to making your travel dreams a reality.
            Get to know the faces behind the scenes who work tirelessly to bring
            you the best travel experiences:
          </p>
          <div class="container">
            <div class="row team-row">
              {/* <div className="aboutparent"> */}
              <div class="col-md-4 col-sm-6 team-wrap">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img src="/Images/man logo.png" alt="CEO" />
                    <div class="overlay">
                      <div class="team-details text-center">
                        {/* <p>
              The visionary leader behind IT Air Travels. He brings a wealth of experience and a 
              boundless enthusiasm for travel.
              </p> */}
                      </div>
                    </div>
                  </div>
                  <h6 class="team-title">Mr. Tahir Abbass </h6>
                  <span>CEO</span>
                </div>
              </div>
              {/* <!-- end team member --> */}

              <div class="col-md-4 col-sm-6 team-wrap">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img src="/Images/man logo.png" alt="" />
                    <div class="overlay">
                      <div class="team-details text-center">
                        {/* <p>
                Our web design team will spend time with our digital marketing team.
              </p> */}
                      </div>
                    </div>
                  </div>
                  <h6 class="team-title">ABC</h6>
                  <span>XYZ</span>
                </div>
              </div>
              {/* <!-- end team member --> */}

              <div class="col-md-4 col-sm-6 team-wrap">
                <div class="team-member last text-center">
                  <div class="team-img">
                    <img src="/Images/man logo.png" alt="" />
                    <div class="overlay">
                      <div class="team-details text-center">
                        {/* <p>
                Our web design team will spend time with our digital marketing team.
              </p> */}
                      </div>
                    </div>
                  </div>
                  <h6 class="team-title">ABC</h6>
                  <span>XYZ</span>
                </div>
              </div>

              {/* <!-- end team member --> */}

              <div class="col-md-4 col-sm-6  team-wrap">
                <div class="team-member text-center">
                  <div class="team-img">
                    <img src="/Images/man logo.png" alt="" />
                    <div class="overlay">
                      <div class="team-details text-center">
                        {/* <p>
                Our web design team will spend time with our digital marketing team.
              </p> */}
                      </div>
                    </div>
                  </div>
                  <h6 class="team-title">ABC</h6>
                  <span>XYZ</span>
                </div>
              </div>
              {/* </div> */}
              {/* <!-- end team member --> */}
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default AboutUs;
