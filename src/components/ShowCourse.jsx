import { useEffect, useState } from 'react'

export default function ShowCourse() {
    const [courseName, setCourseName] = useState('React');

    let handleCourseName = (ev) => {
        setCourseName(ev.target.value);
    }

    let getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {
        getUsers()
        console.log('Rendered')
    }, [])

    useEffect(() => {
        if (courseName === '') return;
        console.log("Updated")
    }, [courseName])

    useEffect(() => {
        return () => {
            console.log('Cleaned')
        }
    }, [])

    return (
        <div>
            <input type="text" onChange={handleCourseName} />
            <div className="m-2">{courseName}</div>
        </div>
    )
}
