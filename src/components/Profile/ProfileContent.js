import React from "react";

const ProfileContent = ({ profileDetails }) => (
  <article className="profileContent">
    <section className="profileContent__physical">
      <header>Personal</header>
      <div>
      <div><label>Height</label> {profileDetails.Height}</div>
      <div><label>Weight</label> {profileDetails.Weight}</div>
      <div><label> Work Rate</label> {profileDetails.Work_Rate} </div>
      </div>
    </section>
    <section className="profileContent__club">
      <header>Club Details</header>
      <div>
      <div><label>Club</label> {profileDetails.Club}</div>
      <div><label>Club Joining</label> {profileDetails.Club_Joining}</div>
      <div><label>Club Kit</label> {profileDetails.Club_Kit}</div>
      <div><label>Club Position</label> {profileDetails.Club_Position}</div>
      <div><label>Contract Expiry</label> {profileDetails.Contract_Expiry}</div>
      </div>
    </section>
    <section className="profileContent__skills">
      <header>Skills</header>
      <div>
      <div><label>Moves</label> {profileDetails.Skill_Moves}</div>
      <div><label>Ball Control</label> {profileDetails.Ball_Control}</div>
      <div><label>Preffered Foot</label> {profileDetails.Preffered_Foot}</div>
      <div><label>Preffered Position</label> {profileDetails.Preffered_Position}</div>
      <div><label>Weak foot</label> {profileDetails.Weak_foot}</div>
      </div>
    </section>
  </article>
);

export default ProfileContent;
