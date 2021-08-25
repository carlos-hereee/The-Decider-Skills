import shortid from "shortid";

const Skills = () => {
  const menuOptions = ["Mindfullness", "Emotion", "Distress", "Interpersonal"];

  return (
    <div>
      {menuOptions.map((item) => (
        <a key={shortid.generate()} href={`/skill/${item}`}>
          {item}
        </a>
      ))}
    </div>
  );
};
export default Skills;
