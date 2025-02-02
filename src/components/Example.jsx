import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function Example() {

    let data = useContext(CounterContext);
    console.log(data)

    return (
        <div>
            This is Example 
            <div>{data.counter}</div>
            <button onClick={data.handleCounter}>Add</button>
        </div>
    );
}
