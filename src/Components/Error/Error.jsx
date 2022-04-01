import { Link } from "react-router-dom"
import style from "./style.css"

function Error() {


    return (
        <div className="error">
            <img src="/error.webp" className="card-img" alt="Background"
                 height="650px" />
            <div className="error-content">
                <h4>Hey captian! Looks like you're heading to a wrong planet!</h4>
                <Link className="btn btn-dark" to="/">Take me back to the homepage</Link>
            </div>        
        </div>
    )
}

export default Error