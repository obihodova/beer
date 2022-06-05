import React from "react";
import "./Aboutpage.css";
import Header from "../../components/Header";
import Navigate from "../../components/Navigate";

function Aboutpage() {
  return (
    <div>
      <Header />
      <Navigate />
      <div className="about">
        <h2>Welcome to the Craft Beer family. Time for a drink.</h2>
        <div className="about-desc">
          <p>
            Welcome to the Craft Beer marketplace where you can virtually shop
            the selection from not just one liquor store but many stores around
            the U.S. at a time. You can get your hands on just about anything
            you’d find on any shelf across the nation, delivered right to your
            doorstep.
          </p>
          <br></br>
          <p>
            We invite you to become part of the Craft Beer family. You’re about
            to join hundreds of thousands of craft beer, wine, and spirit
            enthusiasts from around the globe; people who have a genuine passion
            for all things booze. Chat about beer with others in our Discord
            channel and share your reviews of the things you try.
          </p>
          <br></br>
          <p>
            Once you order from us, you’re in the family for life. Seriously.
            And when family members have problems, we solve them. Something
            wrong with your order? Did a new brew not live up to your
            expectations? Call us. Email us. Bang on our door. A real person
            will respond immediately and make things right. At Craft Beer,
            family matters, and we haven't spent a decade building relationships
            for this to change anytime soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
