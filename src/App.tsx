// import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";

// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelactor } from "./redux/hook";

function App() {
  // const dispatch = useAppDispatch();
  // const count = useAppSelactor((state) => state.counter.value);

  // const incrementCount = (amount: number) => {
  //   dispatch(increment(amount));
  // };
  // const decrementCount = () => {
  //   dispatch(decrement());
  // };

  return (
    <>
      <div>
        {/* <p>Count:{count}</p>
        <Button onClick={() => incrementCount(5)}>Increment by 5</Button>
        <Button onClick={() => incrementCount(1)}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button> */}
        <Navbar></Navbar>
        <Outlet />
      </div>
    </>
  );
}

export default App;
