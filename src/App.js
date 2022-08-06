import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dicNumber, incNumber } from "./Store/actions";

const App = () => {
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Increment/Decrement counter</h1>
      <h3>using React and Redux</h3>
      <div>
        <span onClick={() => dispatch(incNumber())}>Add +</span>
        <input type="text" name="" id="" value={state} />
        <span onClick={() => dispatch(dicNumber())}>Sub -</span>
      </div>
    </section>
  );
};

export default App;
