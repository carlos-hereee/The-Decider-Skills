import { useContext } from "react";
import { Redirect } from "react-router-dom";
import shortid from "shortid";
import { HandbookContext } from "../utlis/Context";

const Definition = () => {
  const { skill, active } = useContext(HandbookContext);
  console.log(skill);
  return (
    <div>
      {active ? (
        <>
          {skill?.map((item) => (
            <div key={shortid.generate()}>
              <p>{item.action}</p>
            </div>
          ))}
        </>
      ) : (
        <Redirect to="skill" />
      )}
    </div>
  );
};
export default Definition;
