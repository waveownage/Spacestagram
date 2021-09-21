import React from "react";
import './nasaCard.css';
import LikeButton from "./likeButton";

const NASACard = props => {

  return (
      <div className="pictureCaption">
        <img src={props.image} />
        <p>Id: {props.id}</p>
        <p>Name of the Rover: {props.name}</p>
        <p>landing date: {props.landingDate}</p>
        <p>launch date: {props.launchDate}</p>
        <p>status: {props.status}</p>
        <p>Date of Photo: {props.earth_date}</p>
        <div id="like">
          <LikeButton/>
        </div>
        <div class="placement">
  <div class="heart"></div>
</div>
      </div>
  );
};

export default NASACard;