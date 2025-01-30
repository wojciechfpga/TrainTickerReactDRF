import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrainList from "./components/TrainList";
import Home from "./components/Home";
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/trains" element={<TrainList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
