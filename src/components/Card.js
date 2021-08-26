import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="heading">
          {data.imageUrl ? (
            <img src={data.imageUrl} alt={data.action} />
          ) : (
            <FontAwesomeIcon icon={faUser} size="3x" />
          )}
          <h3 className="card-title">{data.action}</h3>
        </div>
        <p className="card-text">{data.definition}</p>
      </div>
    </div>
  );
};
export default Card;
