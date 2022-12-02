import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";


function App() {
  return (
  <div className="App">
    <AllRoutes />
  </div>
  )
}


// // custom function for class base 
// export function AppWithRouter(props){
//   const navigate = useNavigate()
//   return (<App navigate={navigate}></App>)
// }

export default App;