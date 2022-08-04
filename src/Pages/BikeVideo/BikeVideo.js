import React from "react";

const BikeVideo = () => {
  return (
    <div className="text-center col-md-12 col-sm-4">
      <h1 className="text-center mt-5 fw-bold fst-italic">Video</h1>
      <p className="text-center">
      If you want to be happy for a day.drink.If you want to be happy for a year.<br/> Marry. If you want to be happy for lifetime, ride a bike
      </p>
      <iframe className="mt-5" width="860" height="415" src="https://www.youtube.com/embed/viqfowYE0fk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
};

export default BikeVideo;
