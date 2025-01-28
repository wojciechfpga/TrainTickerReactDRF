// TrainList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TrainList.css";

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("/api/trains/")
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the trains data!", error);
      });
  }, []);

  return (
    <div className="train-list">
      {trains.map((train) => (
        <div key={train.id} className="train">
          <h2>{train.name}</h2>
          <p>Train Number: {train.train_number}</p>
          <p>Total Seats: {train.total_seats}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainList;
