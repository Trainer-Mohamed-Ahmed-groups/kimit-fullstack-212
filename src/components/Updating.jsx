import { useEffect, useRef, useState } from 'react';

export default function Updating() {
    const inputRef = useRef()


    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    useEffect(() => {
        inputRef.current.focus()
        console.log(inputRef.current)
    }, [])

    let handlePerson = (e) => {
        // e.target.name === 'firstName'
        //     ? setPerson({ ...person, firstName: e.target.value })
        //     : e.target.name === 'lastName'
        //         ? setPerson({ ...person, lastName: e.target.value })
        //         : setPerson({ ...person, email: e.target.value })
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        <>
            <label>
                First name:
                <input
                    ref={inputRef}
                    name='firstName'
                    value={person.firstName}
                    onChange={handlePerson}
                />
            </label>
            <br />
            <label>
                Last name:
                <input
                    name='lastName'
                    value={person.lastName}
                    onChange={handlePerson}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    name='email'
                    value={person.email}
                    onChange={handlePerson}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}