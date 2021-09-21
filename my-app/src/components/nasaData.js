import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./nasaCard";

const NASAData = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=MvHA2fWCDiM9Sk8FJBebeZ6DBQoI5bTxVr4sBJxg`)
      .then(response => {
        console.log(response.data.photos)
        setCard(response.data.photos)
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div>
      {card.map(arr => {
        return (
          <ul>
            <NASACard
              id={arr.id}
              image={arr.img_src}
              name={arr.rover.name}
              landingDate={arr.rover.landing_date}
              launchDate={arr.rover.launch_date}
              status={arr.rover.status}
              earth_date={arr.earth_date}
            />
          </ul>
        );
      })}
    </div>
  );
}

export default NASAData;