import React from "react";
import style from "./Routin.module.scss";

const Routin = (props) => {
  const onShow = () => {
    props.onShow(true, props.index);
  };

  return (
    <div className={style.container}>
      <div>
        <span>Set:</span> {props.index + 1}
      </div>
      <div>
        {props.data.kg}
        <span>kg</span>
      </div>
      <div>
        {props.data.reps}
        <span>reps</span>
      </div>
      <div onClick={onShow}>
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
    </div>
  );
};

export default Routin;
