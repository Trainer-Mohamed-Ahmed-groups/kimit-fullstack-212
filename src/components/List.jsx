export default function List() {
    var persons = ["Mohamed", "Sief", "Rofida", "Nour", "Ali"]
    var filteredPersons = persons.filter(person => person === 'Nour')
    console.log(filteredPersons)
    return (
        <div>
            <h1>List rendering</h1>
            <ul>
                {
                    persons.map((person, index) => <li key={index}>{person}</li>)
                }
            </ul>
            <hr />
        </div>
    )
}
