import { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {
    const [user, setUser] = useState([])

    function searchGithubUser(event) {
        event.preventDefault()
        setUser([...user, event.target.input.value])
    }

    return (
        <div>
            <form onSubmit={searchGithubUser}>
                <input type="text" name="input" />
                <button type="submit">Search GitHub User</button>
            </form>
            <GithubUser username="AlexMalla" />
            {user.map((item, index) =>
                <GithubUser username={item} key={index} />
            )}
        </div>
    )
}


export default GithubUserList