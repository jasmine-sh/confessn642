import Navbar from "./Navbar";
import AccountButtons from "./AccountButtons";

export default function Header()
{
    return(
        <div className="header">
            <Navbar /> <AccountButtons />
        </div>

    )
}