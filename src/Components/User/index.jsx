import "./index.css";

function User(props) {
  return (
    <div className="user-name-and-img">
      <div className="img">
        <img src={props.user.image} alt="User Image" />
      </div>
      <div className="username">
        <h2>{props.user.firstName}</h2>
      </div>
      <div className="phone">
        <h2>Tel: {props.user.phone}</h2>
      </div>
      <div className="email">
        <h2>Gmail: {props.user.email}</h2>
      </div>
    </div>
  );
}

export default User;
