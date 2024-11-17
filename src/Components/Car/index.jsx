import "./index.css";

function Car(props) {
  return (
    <div>
      <ul className="car">
        {props.user.cars.map((car, index) => (
          <li key={index} className={`carname${index + 1}`}>
            {car}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Car;
