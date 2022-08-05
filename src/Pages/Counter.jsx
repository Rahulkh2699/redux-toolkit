import React from "react";
import { increase, decrease } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <p className="  w-28 h-28 border border-gray-300 rounded-md  text-3xl flex align-middle">
        <span className=" flex  m-auto justify-center "> {count}</span>
      </p>
      <div className=" flex gap-3">
        <button
          disabled={count > 200}
          className=" px-4 py-3 rounded-md border border-gray-300 bg-white"
          onClick={() => dispatch(increase())}
        >
          + Count
        </button>

        <button
          disabled={count === 0}
          className="px-4 py-3 rounded-md border border-gray-300 bg-white"
          onClick={() => dispatch(decrease())}
        >
          - Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
