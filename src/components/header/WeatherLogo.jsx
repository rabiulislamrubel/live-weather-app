import logo from "../../assets/logo.svg";

export default function WeatherLogo() {
  return (
    <a href="./index.html">
      <img className="h-9" src={logo} alt="Weather App" />
    </a>
  );
}
