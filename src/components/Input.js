import React from "react";

const Input = (props) => {
  if (props.isWrong) {
    return <p>ERROR</p>;
  } else if (props.isUnlocked) {
    return <p>OK</p>;
  }

  return (
    <div>
      <input disabled type="password" value={props.value} />
    </div>
  );
};

export default Input;
