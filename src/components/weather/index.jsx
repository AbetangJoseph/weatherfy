import React from 'react';

function Weather() {
  return (
    <div className="container">
      <div className="cards">
        <h2>Lagos</h2>
        <h5 className="py-4">
          <i className="wi wi-day-sunny display-3" />
        </h5>
        <h2>25&deg;</h2>
        {minMaxTemperature(23, 45)}
        <h5>Slow Rain</h5>
      </div>
    </div>
  );
}

const minMaxTemperature = (min, max) => {
  return (
    <h4>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h4>
  );
};

export default Weather;
