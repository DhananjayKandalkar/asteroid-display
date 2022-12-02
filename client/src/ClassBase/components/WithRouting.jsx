import React from 'react'
import { useNavigate, useParams } from "react-router-dom";


// custom higher order components for class routing

const WithRouting = (OriginalComponent) => {
  const NewComponent = () => {
    const navigate = useNavigate();
    const params = useParams();
    return <OriginalComponent navigate={navigate} params={params} />;
  };
  return NewComponent;
};

export default WithRouting;