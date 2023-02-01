import React from "react";
import style from "./Workouts.module.scss";

const Workouts = (props) => {
  const showHide = () => {
    props.onShow(true, props.index);
  };

  let imgName = props.data.day.replaceAll(" ", "");

  return (
    <div className={style.container} onClick={showHide}>
      <img src={require(`../img/${imgName}.png`)} alt="sad"></img>
      <div>{props.data.day}</div>
    </div>
  );
};

export default Workouts;
