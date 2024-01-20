import React from "react";
import Image from "../../Assests/avatar.png";
import { Section } from "./ProfileElements";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Profile = () => {
  return (
    <Section>
      <div className="image">
        <img src={Image} alt="" />
      </div>
      <div className="title">
        <h2>Shahroz Ahmed</h2>
        <h5>
          <HiOutlineLocationMarker /> usmania colony,karachi
        </h5>
      </div>

      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>

        <div className="container">
          <h5>DeliveryMen</h5>
          <h3>766</h3>
        </div>

        <div className="container">
          <h5>Hours</h5>
          <h3>87</h3>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
