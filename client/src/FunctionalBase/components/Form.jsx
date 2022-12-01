import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const [inpValue, setInpValue] = useState("");
  const navigate = useNavigate();

  const handleInpChange = (e) => {
    e.preventDefault();
    setInpValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confirm("are you sure");
    navigate(`/AsteroidById/${inpValue}`)
  };

  const handleRandomClick = () => {
    navigate(`/random`)
  };

  return (
    <div>
      <div>
        <h2>Find Asteroids by ID</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleInpChange}
            type="text"
            placeholder="Find by id. for-ex. 3542519"
            value={inpValue}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <button className="" onClick={handleRandomClick}>
            Random Asteroids
          </button>
        </div>
      </div>
    </div>
  );
};


export default Form;