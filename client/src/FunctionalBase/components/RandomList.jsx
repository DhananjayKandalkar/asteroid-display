import React, { useState, useEffect } from "react";
import Card from "./Card";

const API_KEY = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";
const API_LINK = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;


const RandomList = () => {
  const [randomData, setRandomData] = useState([]);

  const getData = () => {
    fetch(API_LINK)
      .then((response) => response.json())
      .then((json) => setRandomData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {randomData.near_earth_objects?.map((items) => {
        return (
          <div key={items.id} > 
            <Card {...items} />
          </div>
        );
      })}
    </div>
  );
};

export default RandomList;



// Get list of asteroid:
// https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M

// Get asteroid details by ID:
// https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M
