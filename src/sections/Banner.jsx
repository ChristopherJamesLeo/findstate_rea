
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


import Nav from "./Nav";

export default function Banner(){
    return (
        <>
            <div>
                <header>
                    <Nav/>
                </header> 
                <section>
                    <div className="banner_container bg-secondary">
                        <div className=" py-5 container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-8 col-sm-12 text-center " style={
                                    {
                                        zIndex: "3"
                                    }
                                }>
                                    <h1 className="mb-5" style={
                                        {
                                            fontSize : "55px",
                                            fontWeight: "400"
                                        }
                                    }>
                                        Find Properties <br /> That Make You Money
                                    </h1>

                                    {/* start global button */}
                                    <Link to="/" className="nav-link global_btn" style={
                                        {
                                            fontSize: "14px"
                                        }
                                    }>Search Properties</Link>
                                    {/* end global button */}
                                </div>
                            </div>
                        </div>
                        <button className="navigator_btn">
                            <span>
                                <FontAwesomeIcon icon={faArrowDownLong} />
                            </span>
                            
                        </button>
                    </div>
                    
                    
                </section>
            </div>
        </>
    )
}