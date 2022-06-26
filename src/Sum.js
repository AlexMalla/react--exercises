export function Sum({ numbers = [1, 2, 3, 4] }) {

    return (
        <div>
            <h1>{numbers.reduce((a, b) => a + b)}</h1>
        </div>
    )
}

export default Sum