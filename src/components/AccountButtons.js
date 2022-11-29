import {Link} from "react-router-dom";

export default function AccountButtons()
{
    return(
        <div className="login">
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/login"}>Log In</Link>
        </div>
    )
}