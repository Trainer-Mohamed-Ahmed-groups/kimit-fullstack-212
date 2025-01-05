export default function Condition() {
    var isValid = false;
    var person = {
        name: "John",
        age: 30
    }

    var persons = ["Mohamed", "Ali"]
    return (
        <div>
            <h2>Condition</h2>
            {
                isValid
                    ? <p>This is valid</p>
                    : <span>This is invalid</span>
            }

            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
                style={{ boxShadow: '10px 10px 10px #999' }}
            />
            <hr />
            {person.name}
            {persons}
        </div>
    )
}
t