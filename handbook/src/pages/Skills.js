import { useContext } from "react";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import { HandbookContext } from "../utlis/Context";

const Skills = ({ data }) => {
  const { makeActive } = useContext(HandbookContext);
  const history = useHistory();

  const handleClick = (item) => {
    makeActive(item);
    history.push(`/${item.title.toLowerCase()}`);
  };
  return (
    <div className="container skills">
      {data.map((item) => (
        <button
          key={shortid.generate()}
          className="btn btn-secondary m-3 skill"
          onClick={() => handleClick(item)}>
          {item.title}
        </button>
      ))}
    </div>
  );
};
export default Skills;
