import useGithubUser from "./useGithubUser"

function GithubUser({ username }) {
    const { data, error, isLoading } = useGithubUser(username)

    return (
        <div style={{ marginTop: '2rem' }}>
            {!!isLoading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            {data &&
                <div style={{ border: 'solid 5px black', padding: '50px', margin: "150px" }}>
                    <h3>Name: {data.name}</h3>
                    <h3>Username: {data.login}</h3>
                    <h3>Location: {data.location}</h3>
                    <h3>Github link: <a href={data.html_url}>{data.html_url}</a></h3>
                </div>
            }
        </div>
    )
}

export default GithubUser