import React, { createContext, useState } from 'react'

export const CounterContext = createContext()

export default function CounterProvider({ children }) {

    const [counter, setCounter] = useState(0)

    let handleCounter = () => setCounter(c => c + 1)
    
    return (
        <CounterContext.Provider value={{ counter, handleCounter }}>{children}</CounterContext.Provider>
    )
}
