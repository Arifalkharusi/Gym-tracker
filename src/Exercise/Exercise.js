import React from "react";
import style from "./Exercise.module.scss";

const Exercise = (props) => {
  const onShow = () => {
    props.onShow(true, props.index);
  };
  return (
    <div className={style.container} onClick={onShow}>
      <div>{props.data.exName}</div>
      <div className={style.sets}>{props.data.sets}</div>
    </div>
  );
};

export default Exercise;
