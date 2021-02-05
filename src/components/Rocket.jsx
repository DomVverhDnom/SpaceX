import React from "react";

import { RellaxWrapper } from "react-rellax-wrapper";
import falcone1 from "../img/falcon-1.png";
function Rocket() {
  return (
    <div>
      {/* <RellaxWrapper speed={-9} percentage={0.9}> */}
      <img src={falcone1} alt="rocket" className="rocket" data-rellax-speed="14" />
      {/* </RellaxWrapper> */}
    </div>
  );
}

export default Rocket;
