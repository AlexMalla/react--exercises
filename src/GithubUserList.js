import { Outlet, useNavigate } from "react-router-dom"


function GithubUserList() {

    const navigate = useNavigate()

    function showGithubOnClick() {
        navigate(':username')
    }

    return (
        <div>
            <h2>Github User List</h2>
            <button className="nav-btn" onClick={showGithubOnClick}>Show Github User</button>
            <Outlet />
        </div>
    )
}

export default GithubUserList 