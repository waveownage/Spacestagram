import React from "react";
import './nasaCard.css';

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
      </div>
  );
};

export default NASACard;