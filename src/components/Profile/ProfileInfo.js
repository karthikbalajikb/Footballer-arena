import React from "react";
import "./Profile.css";

const PlayerURL = (name) => {
   return name === undefined ?  require(`../../images/avatar.png`) : require(`../../images/${name}.png`);
}

const ProfileInfo = ({ profileDetails }) => (
  <section>
    <header>
    <img src={PlayerURL(profileDetails.Name)} width="100%" height="200px" className="ProfileInfo__img" />
    </header>
    <article className="ProfileInfo__details">
        <p>Age : {profileDetails.Age}</p>
        <p>DOB : {profileDetails.Birth_Date}</p>
        <p>Nationality : {profileDetails.Nationality}</p>
        <p>Rating : {profileDetails.Rating} </p>
    </article>
  </section>
);

export default ProfileInfo;
