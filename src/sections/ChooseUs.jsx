
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionTitle from "./SectionTitle";

import { datas } from "../datas/choose";


export default function ChooseUs({ani}){
    useEffect(()=>{
        AOS.init();
    },[]);

    return (
        <>
            <div>
                <div className="py-5 why_choose_use_main_container">
                    <SectionTitle subTitle={"services"} title={"Why Choose Us"} ani={"fade-up"} className=""/>
                    <div className="mt-5 row">
                        <div className="col-md-6 col-sm-12">
                            <div className="choose_img_container" style={
                                {
                                    width: "100%"
                                }
                            }>
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/backgrounds/about.jpg.webp`} style={
                                    {
                                        width : "100%",
                                        objectFit: "cover"
                                    }
                                } alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 px-5">
                            <ul className="list-unstyled">
                                {
                                    datas.map(function(data){
                                        return (
                                            <li data-aos={ani} key={data.id} className="mb-5">
                                                <div className="d-flex justify-content-start align-items-start choose_list_item">
                                                    <span className="d-block"></span>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-8 col-md-6 col-sm-12">
                                                                <h5 className="mb-2 text-dark fw-bold">{data.caption}</h5>
                                                                <p className="text-muted">
                                                                    {data.message}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}