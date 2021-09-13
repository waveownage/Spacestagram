import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
    border: solid #443e3e 1px;
    color: #443e3e;
    width: 80%;
    margin-left: 8%;
    padding: 2%;
    font-size: 1.5rem;
  }
    &:hover {
        color: red;
        position:relative;
        animation: bounceAround 3.1s ease-in-out infinite;
        @keyframes bounceAround {
        0% {transform:translateY(0);}
        20% {transform:translateY(-60px) rotate(0deg);}
        25%{transform:translateY(20px) rotate(0deg);}
        35%, 55%{transform:translateY(0px) rotate(0deg);}
        60% {transform: translateY(-20px) rotate(0deg);}
        100%{transform: translateY(-20px) rotate(360deg);}
    }
`;

const NASACard = props => {
  return (
    <StyledLi>
      <p>Name: {props.name}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Hair_color: {props.hair_color}</p>
      <p>Skin_color: {props.skin_color}</p>
      <p>Eye_color: {props.eye_color}</p>
      <p>Birth_year: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
    </StyledLi>
  );
};

export default NASACard;