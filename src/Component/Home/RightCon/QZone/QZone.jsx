import React from "react";
import qZone1 from "../../../../..//src/assets/qZone1.png";
import qZone2 from "../../../../..//src/assets/qZone2.png";
import qZone3 from "../../../../..//src/assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary text-center my-4 py-4">
      <h4>Q-Zone</h4>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
    </div>
  );
};

export default QZone;
