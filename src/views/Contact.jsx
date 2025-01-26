import { useState } from "react";
import Updating from "../components/Updating";
import { Button } from "react-bootstrap";

export default function Contact() {
    var [users, setUsers] = useState(['Mohamed', 'Fares', 'Ali', 'Amany', 'Rofida'])

    let handleSort = () => {
        let usersCopy = [...users]
        usersCopy.sort()
        setUsers(usersCopy) 
    }
    return (
        <div>
            Contact page
            <Updating />
            <hr />
            <ul>
                {
                    users.map((user, i) =>
                        <li key={i}>{user}</li>
                    )
                }
            </ul>
            <Button variant="info" onClick={handleSort}>Sort</Button>
        </div>
    )
}
