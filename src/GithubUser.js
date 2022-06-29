import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {

    const { data, error, loading } = useGithubUser(username)

    return (
        <div>
            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            {data && <img src={data.avatar_url} alt="Avatar" width={200} />}
            {data && <h1>Hi, my name is {data.name}.</h1>}
            {data && <h2>I live in {data.location}</h2>}
            {data && <h3>My GitHub is {data.html_url}</h3>}
        </div>
    )
}

export default GithubUser; 