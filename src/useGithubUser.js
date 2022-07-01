import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
    const isValid = !username ? true : false
    const { data, error, mutate } = useSWR(
        isValid ? null : `https://api.github.com/users/${username}`
        , fetcher
    )

    function fetchGithubUser() {
        mutate()
    }


    return {
        data,
        error,
        isLoading: !data && !error && !isValid,
        isValid,
        fetchGithubUser
    }
}

export default useGithubUser
