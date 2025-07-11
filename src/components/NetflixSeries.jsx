import React from 'react';
import seriesData from "../api/seriesData.json";       // JSON data file
import SeriesCard from "./SeriesCard";                 // Card component

const Netflix = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default Netflix;
