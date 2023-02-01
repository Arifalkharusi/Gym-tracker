import React, { useState, useEffect } from "react";
import data from "./data.json";
import Workouts from "./Workouts/Workouts";
import Exercise from "./Exercise/Exercise";
import Routin from "./Routin/Routin";
import EditOverlay from "./EditOverlay/EditOverlay";
import style from "./App.module.scss";

const reloadData = () => {
  let reloadData = JSON.parse(localStorage.getItem("gym"));
  if (reloadData) return reloadData;
  return data;
};

function App() {
  const [dataMain, setDataMain] = useState(reloadData());
  const [exSelector, setExSelector] = useState(true);
  const [showWorkout, setShowWorkout] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [routin, setRoutin] = useState(false);
  const [indexEx, setIndexEx] = useState(0);
  const [indexRt, setIndexRt] = useState(0);
  const [indexReps, setIndexReps] = useState(0);

  useEffect(() => {
    localStorage.setItem("gym", JSON.stringify(dataMain));
  }, [dataMain]);

  const showExHandler = (boolean, i) => {
    setExSelector(!boolean);
    setShowWorkout(boolean);
    setIndexEx(i);
  };

  const showRoutin = (boolean, i) => {
    setShowWorkout(!boolean);
    setRoutin(boolean);
    setIndexRt(i);
  };

  const repsHandler = (boolean, i) => {
    setOverlay(boolean);
    setIndexReps(i);
  };

  const closeOverlay = (boolean) => {
    setOverlay(boolean);
  };

  const home = () => {
    setExSelector(true);
    setShowWorkout(false);
    setRoutin(false);
  };
  const repsData = dataMain[indexEx].workout[indexRt].weight;

  const renderReps = (object) => {
    repsData[indexReps] = object;
    setDataMain((prev) => [...prev]);
  };

  return (
    <div className={style.container}>
      <h1 onClick={home}>
        <i class="fa-solid fa-dumbbell"></i>
      </h1>
      <div className={style.mainSection}>
        {overlay && (
          <EditOverlay
            data={repsData}
            index={indexReps}
            hide={closeOverlay}
            render={renderReps}
          />
        )}
        {exSelector &&
          dataMain.map((exc, i) => (
            <Workouts data={exc} index={i} onShow={showExHandler} />
          ))}

        {showWorkout &&
          dataMain[indexEx].workout.map((x, i) => (
            <Exercise data={x} index={i} onShow={showRoutin} />
          ))}

        {routin &&
          repsData.map((x, i) => (
            <Routin index={i} data={x} onShow={repsHandler} />
          ))}
      </div>
    </div>
  );
}

export default App;
