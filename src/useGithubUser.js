import { useState, useEffect } from "react"

function useGithubUser(username) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.status !== 200) {
                    setError(new Error("User not found"))
                }
                return response.json()
            })
            .then(json => {
                console.log(json)
                setLoading(false)
                setData(json)
            })
            .catch(error => {
                setError(error)
            })
    }, [username])

    return { data, error, loading }
}


export default useGithubUser;