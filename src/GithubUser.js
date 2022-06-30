import useFetch from "./useFetch"

function GithubUser({ username }) {
    const { data, error, loading } = useFetch(username)
    return <div>
        {loading && <h1>Loading..</h1>}
        {error && <h1>{error.message}</h1>}
        {data && <div>
            <h1>Hi, I'm {data.name}</h1>
            <img src={data.avatar_url} alt="avatar" width="100" />
            <h2>I live in {data.location}</h2>
            <h3>My GitHub is {data.html_url}</h3>
        </div>}
    </div>
}

export default GithubUser