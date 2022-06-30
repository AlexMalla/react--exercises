import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";


function ShowGithubUser() {
    const { username } = useParams()
    return (
        <div>
            {console.log(username)}
            <GithubUser />
        </div>
    )
}

export default ShowGithubUser