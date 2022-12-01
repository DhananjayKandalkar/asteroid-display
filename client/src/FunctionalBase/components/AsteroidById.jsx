import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const API_KEY = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";

// https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}
// 3542519

const AsteroidById = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});

  //   const { name, estimated_diameter, orbital_data } = singleData;

  const getSingleData = () => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setSingleData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSingleData();
  }, []);

  console.log(singleData, "single");

  return (
    <div>
      <Card {...singleData} />
    </div>
  );
};

export default AsteroidById;