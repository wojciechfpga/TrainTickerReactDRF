import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import logo from './logo.svg';

function App() {
  const [data, setData] = useState("None");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHello() {
      try {
        const response = await axios.get("/api/tickets/");
        setData(response.data); // Ustaw dane z pola `data`
      } catch (err) {
        setError("Failed to fetch data"); // Obsługa błędu
      }
    }
    fetchHello();
  }, []);

  return (
    <div className="App">
      {error ? (
        <p style={{ color: 'red' }}>{error}</p> // Wyświetlenie błędu
      ) : (
        <div>
          <p>{typeof data === 'object' ? JSON.stringify(data) : data}</p> {/* Obsługa obiektów */}
        </div>
      )}
    </div>
  );
}

export default App;
