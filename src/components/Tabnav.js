import { Link } from "react-router-dom";
export default function Tabnav() {
  return (
    <div>
      <h3>Forecast</h3>
      <Link to="/">Now</Link> <Link to="/7days">7 Days</Link>
    </div>
  );
}
