"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./redux/store";
import { decrement, increment } from "./redux/counter/counterSlice";

export default function Home() {
  const count = useSelector((state : RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    
      <div>
        <div>
          <div>{count}</div>
          <button onClick={() => dispatch(increment())}>
            plus
          </button>
          <button onClick={() => dispatch(decrement())}>
            minus
          </button>
        </div>
      </div>
    
  );
}
