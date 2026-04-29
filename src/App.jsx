import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, reset } from "./reducer/CounterReducer";
import "../src/App.css";

const App = () => {
    const {count} = useSelector((state) => state?.count);
    const dispatch = useDispatch();

  return (
    <div className="container">
        <h1 className="count"> {count} </h1>
        <div className="section">
            <button className="decrement__btn" onClick={() => {
                dispatch(decrement());
            }}> Minus </button>
            <button className="increment__btn" onClick={() => {
                dispatch(increment());
            }}> Plus </button>
            <button className="reset__btn" onClick={() => {
                dispatch(reset());
            }}> Reset </button>
        </div>
    </div>
  )
}
export default App