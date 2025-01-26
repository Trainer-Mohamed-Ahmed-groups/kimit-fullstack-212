import { useMemo, useState } from "react";

export default function UseMemo() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')

    let createRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    // let fullName = <div className="fw-bold" style={{ color: createRandomColor() }}>Full name : {firstName + lastName}</div>

    let fullName = useMemo(() => (
        <div className="fw-bold" style={{ color: createRandomColor() }}>Full name : {firstName + lastName}</div>
    ), [firstName, lastName])

    return (
        <div>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <p>First Name: {firstName}</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <p>Last Name: {lastName}</p>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <p>Age is : {age}</p>

            {fullName}
        </div>
    )
}
