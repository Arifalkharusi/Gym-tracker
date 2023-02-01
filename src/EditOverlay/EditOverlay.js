import React, { useState } from "react";
import style from "./EditOverlay.module.scss";

const EditOverlay = (props) => {
  const [kg, setKg] = useState(props.data[props.index].kg);
  const [reps, setReps] = useState(props.data[props.index].reps);

  const closeOverlay = () => {
    props.hide(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const obj = { kg: e.target[0].value, reps: e.target[1].value };
    props.render(obj);
    props.hide(false);
  };

  return (
    <div className={style.container}>
      <form onSubmit={submit}>
        <div onClick={closeOverlay}>X</div>
        <input
          type="number"
          value={kg}
          placeholder="Weigtht"
          onChange={(e) => {
            setKg(e.target.value);
          }}
        />
        <input
          type="number"
          value={reps}
          placeholder="Reps"
          onChange={(e) => {
            setReps(e.target.value);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditOverlay;
