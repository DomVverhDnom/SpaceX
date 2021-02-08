import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
function Details() {
  return (
    <>
      <section class="main">
        <h1 class="title">FalconSat</h1>
      </section>

      <main class="details">
        <div class="container">
          <div class="details-row">
            <div class="details-image">
              <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
            </div>
            <div class="details-content">
              <p class="details-description">Engine failure at 33 seconds and loss of vehicle</p>
            </div>
          </div>
          <div>
            <Iframe
              className="details-youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dLQ2tZEH6G0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <Link to="/Calendar" class="button button-back">
          Вернуться назад
        </Link>
      </main>
    </>
  );
}

export default Details;
