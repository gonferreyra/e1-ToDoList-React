import React from "react";
import Video from "../../video/video.mp4";

const Homescreen = () => {
  return (
    <div className="video__container">
      <video autoPlay loop muted src={Video} type="video/mp4" />
    </div>
  );
};

export default Homescreen;
