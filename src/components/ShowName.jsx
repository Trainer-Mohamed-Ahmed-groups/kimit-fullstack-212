import { useState } from "react";

export default function ShowName() {
    // var courseName = "React course";
    var [courseName, setCourseName] = useState("React course");

    let changeCourseName = () => {
        // courseName = "Frontend course";
        setCourseName("Frontend course");
    }

    return (
        <div>
            <h3>Your course name is : {courseName}</h3>
            <button onClick={changeCourseName}>Change</button>
        </div>
    )
}
