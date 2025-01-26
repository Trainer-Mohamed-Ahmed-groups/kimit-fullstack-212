import { useReducer, useState } from "react"
import { Button } from "react-bootstrap"

function counterReducer(state, action) {
    switch (action) {
        case 'INCREMENT': return ++state
        case 'DECREMENT': return --state
        default: state
    }
}

export default function UseReducer() {

    // const [myNumber, setMyNumber] = useState(0)
    const [myNumber, dispatch] = useReducer(counterReducer, 0)

    // let handlePlus = () => { setMyNumber(n => n + 1) }
    // let handleMinus = () => { setMyNumber(myNumber - 1) }

    return (
        <div>
            <h2>UseReducer</h2>
            <div className="d-flex align-content-center justify-content-center gap-2">
                <Button onClick={() => dispatch('INCREMENT')} variant="secondary">+</Button>
                <p>My Number: {myNumber}</p>
                <Button onClick={() => dispatch('DECREMENT')} variant="secondary">-</Button>
            </div>
        </div>
    )
}
