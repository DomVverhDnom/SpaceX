import React from "react";

function Main({ rocketsName }) {
  return (
    <section className="main">
      <h1 className="title">{rocketsName.falcone1}</h1>

      <div className="video-container">
        <video className="video" autoPlay loop muted src="./video/moon.mp4"></video>
      </div>
    </section>
  );
}

export default Main;
