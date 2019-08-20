import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import './App.css';



function App() {
    return(
            <Router>
                <div className="container mt-3">
                    <Route exact path="/" component={Launches} />
                    <Route exact path="/launch/:flight_number" component={Launch} />
                </div>
            </Router>
        )
}


export default App;
