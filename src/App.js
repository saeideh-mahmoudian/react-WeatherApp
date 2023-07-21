import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/68983-saeideh-mahmoudian"
            target="_blank"
            rel="noreferrer"
          >
            Saeideh Mahmoudian
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/saeideh-mahmoudian/react-WeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
