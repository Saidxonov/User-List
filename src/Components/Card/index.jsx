import "./index.css";
import User from "../User";
import Adress from "../Adress/index.jsx";
import Car from "../Car/index.jsx";

function Card(props) {
  return (
    <div className="wrapper">
      <User user={props.user} />
      <Adress user={props.user} />
      <Car user={props.user} />
    </div>
  );
}

export default Card;
