
import { useEffect } from "react";
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Search({ani}){
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <>
            <div>
                <div className="py-5 container">
                    <div className="search_group" data-aos={ani}>
                        <form action="">
                            <div className="row">
                                <div className="col-md-9 col-sm-12 mb-2">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="location">Location</label>
                                                <input type="text" name="" id="location" className="form-control outline-none shadow-none border-1" placeholder="City/Loaclity Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="type">Property Type</label>
                                                <select name="type" id="type" className="form-select outline-none shadow-none border-1">
                                                    <option value="" selected disabled>Type</option>
                                                    <option value="">Commercial</option>
                                                    <option value="">-Office</option>
                                                    <option value="">Resicential</option>
                                                    <option value="">Villa</option>
                                                    <option value="">Condominium</option>
                                                    <option value="">Apartment</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="status">Property Status</label>
                                                <select name="status" id="status" className="form-select outline-none shadow-none border-1">
                                                    <option value="" selected disabled>Type</option>
                                                    <option value="">Rent</option>
                                                    <option value="">Sale</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="price">Price Limit</label>
                                                <select name="price" id="price" className="form-select outline-none shadow-none border-1">
                                                    <option value="" selected >$5000</option>
                                                    <option value="" selected >$10000</option>
                                                    <option value="" selected >$15000</option>
                                                    <option value="" selected >$20000</option>
                                                    <option value="" selected >$25000</option>
                                                    <option value="" selected >$30000</option>
                                                    <option value="" selected >$35000</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 col-md-3 col-sm-12 mb-2">
                                    {/* start global button */}
                                    <Link to="/" className="nav-link global_btn" style={
                                        {
                                            display: "block",
                                            padding: "20px",
                                            fontSize: "16px",
                                            textAlign: "center"

                                        }
                                    }>Search Properties</Link>
                                    {/* end global button */}
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}