import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

const rocketImg = {
  "Falcon 1": "falcon-1",
  "Falcon 9": "falcon-9",
  "Falcon Heavy": "falcon-heavy",
  Starship: "starship",
};
function Features({ rocket, name, height, diameter, mass, payload_weights, description }) {
  return (
    <section className="features">
      <h2 className="features-title">
        {name} <br />
        Overview
      </h2>

      <div className="overview">
        <table className="table">
          <caption className="table-title"></caption>
          <thead>
            <tr>
              <td className="table-column">HEIGHT</td>
              <td className="table-column">
                {height.meters} m / {height.feet} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">DIAMETER</td>
              <td className="table-column">
                {diameter.meters} m / {diameter.feet} ft
              </td>
            </tr>
            <tr>
              <td className="table-column">MASS</td>
              <td className="table-column">
                {mass.kg} kg / {mass.lb} lb
              </td>
            </tr>
            {payload_weights.map((item) => (
              <tr key={item.id}>
                <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                <td className="table-column">
                  {item.kg} kg / {item.lb} lb
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <RellaxWrapper speed={14}>
          <img
            src={`img/${rocketImg.hasOwnProperty(rocket) ? rocketImg[rocket] : ""}.png`}
            alt="rocket"
            className="rocket"
          />
        </RellaxWrapper>

        <article>
          <h3 className="features-subtitle">DESCRIPTION</h3>
          <p className="features-text">{description}</p>
        </article>
      </div>
    </section>
  );
}

export default Features;
