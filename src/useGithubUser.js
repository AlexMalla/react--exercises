import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username) {
    const isValid = !username ? true : false
    const { data, error } = useSWR(
        isValid ? null : `https://api.github.com/users/${username}`
        , fetcher
    )


    return {
        data,
        error,
        isLoading: !data && !error && !isValid,
        isValid
    }
}

export default useGithubUser
