import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrainList from "./components/TrainList";
import Home from "./components/Home";
import Layout from "./components/Layout";
import TrainForm from "./components/TrainForm";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/trains" element={<TrainList />} />
              <Route path="/createtrain" element={<TrainForm />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
