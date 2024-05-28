import { Link } from "react-router-dom";
import {datas} from './../datas/offers';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionTitle from "./SectionTitle";


export default function Offers({ani}){
    useEffect(()=>{
        AOS.init();
    },[]);
    
    return (
        <>
            <div>
                <SectionTitle subTitle={"we are Offer"} title={"Exclusive Offer For You"} ani={"fade-up"} className=""/>
                <div className="mt-5 container">
                    <div className="offer_items_main_container">
                        <div className="row">
                            {
                                datas.map(function(data){
                                    return (
                                        <div key={data.id} className="col-lg-4 col-md-6 col-sm-12 mb-lg-4 mb-md-4 mb-sm-2">
                                            <Link to="/" data-aos={ani} className="nav-link offer_items_container">
                                                <div className="offer_item_img_container">
                                                    <div className="offer_img" style={
                                                        {
                                                            backgroundImage:`url(${process.env.PUBLIC_URL}/${data.backgroundImg})`
                                                        }
                                                    }>
                                                        
                                                    </div>
                                                    <div className="d-flex justify-content-start align-items-center owner_data">
                                                            <div className="rounded-circle overflow-hidden owner_avator" style={
                                                                {
                                                                    width: "40px",
                                                                    height: "40px",
                                                                }
                                                            }>
                                                                <img style={
                                                                    {
                                                                        width: "100%",
                                                                        height:"100%"
                                                                    }
                                                                } src={`${process.env.PUBLIC_URL}/assets/imgs/avators/person_1.jpg.webp`} alt="" />
                                                            </div>
                                                            <span className="ms-3 text-white">{data.username}</span>
                                                    </div>
                                                </div>
                                                <div className="shadow-sm p-4 offer_captions_container">
                                                    <div className="mb-4">
                                                        <span style={
                                                            {
                                                                color: "var(--global-text-para-color)",
                                                                textDecoration: "line-through"
                                                            }
                                                        }>{data.price}</span><span className="mx-2 fw-bold" style={
                                                            {
                                                                color : "var(--global-green-color)"
                                                            }
                                                        }>${data.discount_price}</span><span className="text-muted">/mo</span>
                                                    </div>
                                                    <div className="mb-3">
                                                        <h5 className="text-dark fw-bold">{data.name}</h5>
                                                        <span className="text-muted">{data.address}</span>
                                                    </div>

                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}