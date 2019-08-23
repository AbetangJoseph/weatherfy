import React from 'react';

function Weather({
  city,
  country,
  mainTemp,
  maxTemp,
  minTemp,
  description,
  icon
}) {
  return (
    <div className="container">
      <div className="cards pt-5">
        {city && (
          <h2>
            {city}, {country}
          </h2>
        )}

        <h5 className="py-4">
          <i className={`wi ${icon} display-3`} />
        </h5>
        {mainTemp && <h2>{mainTemp}&deg;</h2>}
        {minMaxTemperature(maxTemp, minTemp)}
        <h5>{description}</h5>
      </div>
    </div>
  );
}

const minMaxTemperature = (min, max) => {
  if (max && min) {
    return (
      <h4>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h4>
    );
  }
};

export default Weather;
