import "./index.css";

function Adress(props) {
  console.log(props);
  return (
    <div>
      <ul className="adres">
        <li className="region">Region: {props.user.address.region}</li>
        <li className="zip-code">Zip Code: {props.user.address.zip}</li>
      </ul>
    </div>
  );
}

export default Adress;
