import { useCallback, useState } from "react"
import MyBtn from "../components/MyBtn";

export default function UseCallback() {

    let [counter, setCounter] = useState(0);


    let handleCounter = () => {
        setCounter(c => c + 1)
    }

    let incrementCallback = useCallback(handleCounter, [])

    return (
        <div>
            <h2>UseCallback</h2>
            <MyBtn myProp={incrementCallback}></MyBtn>
            <div>{counter}</div>
        </div>
    )
}
