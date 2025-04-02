import "../css/squareLogin.css";
import Logo2 from "../assets/Logo2.svg";
import LoginCustom from "../components/LoginCustom";

function SquareLogin() {
  return (
    <div className="square d-flex flex-column align-items-center justify-content-center">
      <img src={Logo2} alt="Freeitinerary-logo" className="simple-logo mb-5 shadow" />
      <div className="inner-sq border border-1 rounded shadow-lg text-center px-4 py-3">
        <h2 className="mb-2">Welcome back, time for another adventure</h2>
        <LoginCustom />
      </div>
    </div>
  );
}

export default SquareLogin;
