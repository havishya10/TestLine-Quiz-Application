import React from "react";
import styled from "styled-components";

export function Loader() {
  return (
    <StyledWrapper>
      <div className="loader" id="loader">
        <p className="heading">Loading</p>
        <div className="loading">
          <div className="load" />
          <div className="load" />
          <div className="load" />
          <div className="load" />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .heading {
    color: black;
    letter-spacing: 0.2em;
    margin-bottom: 1em;
  }

  .loading {
    display: flex;
    width: 5em;
    align-items: center;
    justify-content: center;
  }

  .load {
    width: 23px;
    height: 3px;
    background-color: #0b8e85;
    animation: 1s move_5011 infinite;
    border-radius: 5px;
    margin: 0.1em;
  }

  .load:nth-child(1) {
    animation-delay: 0.2s;
  }

  .load:nth-child(2) {
    animation-delay: 0.4s;
  }

  .load:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes move_5011 {
    0% {
      width: 0.2em;
    }

    25% {
      width: 0.7em;
    }

    50% {
      width: 1.5em;
    }

    100% {
      width: 0.2em;
    }
  }
`;
