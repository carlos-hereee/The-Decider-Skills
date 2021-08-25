import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import shortid from "shortid";
import { HandbookContext } from "../utlis/Context";
import Card from "./Card";

const Definition = () => {
  const { skill, active } = useContext(HandbookContext);
  const [data, setData] = useState(skill[0] || {});

  const handleClick = (item) => {
    setData(item);
  };
  return (
    <div>
      {active ? (
        <div className="container">
          <div className="card-body">
            <h1 className="card-header">{active}</h1>
            <Card data={data} />
          </div>
          <div className="list-skills">
            {skill?.map((item) => (
              <button
                className="btn btn-secondary button"
                key={shortid.generate()}
                onClick={() => handleClick(item)}>
                {item.action}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <Redirect to="skill" />
      )}
    </div>
  );
};
export default Definition;
