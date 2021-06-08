import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar";
import {Helmet} from 'react-helmet'

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <Helmet>
        <tittle>MyTea</tittle>
      </Helmet>
      <Navbar />
      <div className="container">{routes}

    </div>
     <div></div> 
    
    </Router>
  );
}

export default App;
