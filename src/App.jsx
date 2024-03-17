import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState();
  const [temp, setTemp] = useState();
  const [hum, setHum] = useState();
  const [feels, setFeels] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=sp, es&APPID=fa8e287e3b11b4e6204a4025a3db2272"
    )
      .then((res) => res.json())
      .then((res) => {
        const data = res;
        console.log(data);
        setCity(data.name);
        setTemp(data.main.temp);
        setHum(data.main.humidity);
        setFeels(data.main.feels_like);
        setIcon(data.wather[0].icon);
      });
  }, []);

  return (
    <>
      <input type="text" placeholder="Escriba una ciudad" />
      <img src={icon} alt="aaa" />
      <h2>{city}</h2>
      <h3>Temperatura</h3>
      <p>{temp}°C</p>
      <h3>Sensación Térmica</h3>
      <p>{feels}°C</p>
      <h3>Humedad:</h3>
      <p>{hum}%</p>
    </>
  );
}

export default App;
