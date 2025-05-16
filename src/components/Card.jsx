import "./Card.css";
const Card = (props) => {
  return (
    <div className="card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default Card;
