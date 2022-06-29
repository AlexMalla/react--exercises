import { useEffect, useState } from "react";

function GithubUser({ username }) {

    const [data, setData] = useState({ name: "", avatar_url: "", location: "", html_url: "" })


    async function fetchGithubUser() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchGithubUser()
    }, [])

    return (
        <div>
            {data && <img src={data.avatar_url} alt="avatar"></img>}
            {data && <h1>Hi, my name is {data.name}.</h1>}
            {data && <h2>I live in {data.location}</h2>}
            {data && <h3>My GitHub is {data.html_url}</h3>}
        </div>
    )
}

export default GithubUser;