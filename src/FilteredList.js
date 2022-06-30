import { useMemo } from "react"

function FilteredList() {

    const deathNote = [
        {
            name: "Light Yagami",
            id: 1,
            age: 17
        },
        {
            name: "L",
            id: 2,
            age: 24
        },
        {
            name: "Amane Misa",
            id: 3,
            age: 19
        }
    ]

    const filteredList = useMemo(() => {
        return deathNote.filter(person => person.age > 18)
    }, [])

    return (
        <div>
            <h1>Filtered list</h1>
            <ul>
                {filteredList.map(person => (
                    <li key={person.id}>Name: {person.name}, age: {person.age}</li>
                ))}
            </ul>

        </div>
    )

}

export default FilteredList