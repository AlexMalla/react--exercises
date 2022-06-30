import { useEffect, useState } from "react";

function GithubUser({ username = "AlexMalla" }) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200) {
                    setError(new Error("User not found"))
                }
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
            })
            .catch(error => {
                setError(error)
            })
    }, [username])

    return (
        <div>
            {error && <h1>Error</h1>}
            {data && <img src={data.avatar_url} alt="avatar" width={100}></img>}
            {data && <h1>Hi, my name is {data.name}.</h1>}
            {data && <h2>I live in {data.location}</h2>}
            {data && <h3>My GitHub is {data.html_url}</h3>}


        </div>
    )
}

export default GithubUser; 