import shortid from "shortid";

const Skills = ({ data }) => {
  return (
    <div className="container skills">
      {data.map((item) => (
        <button
          key={shortid.generate()}
          className="btn btn-secondary m-3 skill">
          {item.title}
        </button>
      ))}
    </div>
  );
};
export default Skills;
