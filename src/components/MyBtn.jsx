import React from "react";
function MyBtn({ myProp }) {

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    console.log(randomColor)

    return (
        <button onClick={myProp} style={{ backgroundColor: randomColor }}>Add</button>
    )
}
export default React.memo(MyBtn)