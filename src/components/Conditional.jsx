import { useState } from "react";

export default function Conditional() {

    var [isLogin, setIsLogin] = useState(true);

    let handleLogin = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div>
            {
                isLogin
                    ? <div className="user">Hello user</div>
                    : <div>Please login</div>
            }
            <button onClick={handleLogin}>Click me</button>
        </div>
    )
}
