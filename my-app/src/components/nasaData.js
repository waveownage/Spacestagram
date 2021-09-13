import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./nasaCard";

function NASAData() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=MvHA2fWCDiM9Sk8FJBebeZ6DBQoI5bTxVr4sBJxg`)
      .then(response => {
        console.log(response.data.results);
        console.log(response.data);
        setCard(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {card.map(arr => {
        return (
          <ul>
            <NASACard
              date={arr.date}
              hdurl={arr.hdurl}
            />
          </ul>
        );
      })}
    </div>
  );
}

export default NASAData;