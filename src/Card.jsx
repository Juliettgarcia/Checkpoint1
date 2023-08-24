import "./Card.css";

const Card = ({ cores }) => {
  return (
    <div className="card_item" style={{ backgroundColor: cores.codigo }}>
      <h5> {cores.nome} </h5>
      <h2> {cores.codigo} </h2>
    </div>
  );
};

export default Card;
