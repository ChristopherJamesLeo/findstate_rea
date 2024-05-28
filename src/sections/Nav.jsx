

import { Link , NavLink } from "react-router-dom"



export default function Nav(){
    return (
        <>  
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h4 className="fw-bold" style={
                            {
                                fontSize: "20px"
                            }
                        }>Findstate</h4>
                    </Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mynav">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </button>
                    <div id="mynav" className="navbar-collapse justify-content-end collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/agent" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>Agent</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/listing" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>Listing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={`px-4 fw-semibold py-2 nav-link ${function(isActive){
                                    return isActive ? "active" : ""
                                }}}`}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>
           
        </>
    )
}