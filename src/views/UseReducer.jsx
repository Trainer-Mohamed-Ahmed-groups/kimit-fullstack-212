import { useContext, useReducer, useState } from "react"
import { Button } from "react-bootstrap"
import { CounterContext } from "../context/CounterContext"

function counterReducer(state, action) {
    switch (action) {
        case 'INCREMENT': return ++state
        case 'DECREMENT': return --state
        default: state
    }
}

export default function UseReducer() {

    const myData = useContext(CounterContext)

    // const [myNumber, setMyNumber] = useState(0)
    const [myNumber, dispatch] = useReducer(counterReducer, 0)

    // let handlePlus = () => { setMyNumber(n => n + 1) }
    // let handleMinus = () => { setMyNumber(myNumber - 1) }

    return (
        <div>
            <h2>UseReducer</h2>
                <p>{myData.counter}</p>
        </div>
    )
}
