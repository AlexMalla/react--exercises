import useSWR from "swr";

function useFetch(username = "AlexMalla") {

    const fetcher = url => fetch(url).then((resp) => resp.json());
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return { data, error, loading: !data && !error };
}

export default useFetch