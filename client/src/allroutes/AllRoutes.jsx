import React from 'react'
import { Routes, Route} from "react-router-dom";
// import Form from "../FunctionalBase/components/Form";
// import AsteroidById from '../FunctionalBase/components/AsteroidById';
// import RandomList from '../FunctionalBase/components/RandomList';

import Form from "../ClassBase/components/Form"; 
import AsteroidById from "../ClassBase/components/AsteroidById";
import RandomList from "../ClassBase/components/RandomList"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/AsteroidById/:id" element={<AsteroidById />} />
      <Route path="random" element={<RandomList />} />
      <Route path="*" element={<Form />} />
    </Routes>
  );
};

export default AllRoutes;