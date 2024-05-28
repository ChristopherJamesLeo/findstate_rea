
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import {datas} from "./../datas/properties";


export default function Properties (){
    return (
        <>
            <div className="py-5 properties_container">
                <SectionTitle subTitle = {"FIND PROPERTIES"} title={"Find Properties In Your City"} ani={"fade-up"} />

                <div className="container">
                    <div className="mt-5 properties_items_main_container">
                        <div className="row">
                            {
                                datas.map(function(data){
                                    return (
                                        <div key={data.id} className="col-lg-4 col-ld-6 col-sm-12 mb-4">
                                            <div className="properties_item_container">
                                                <div className="overflow-hidden rounded-1 properties_img_container" style={
                                                    {
                                                        width: "100%",
                                                        height: "250px"
                                                    }
                                                }>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/imgs/gallery/${data.img}`} alt="" style={
                                                        {
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }
                                                    } />
                                                </div>
                                                <div className="p-2 d-flex flex-column justify-content-between align-items-start properties_captions_group">
                                                    <span className="d-inline-block global_btn" style={
                                                        {
                                                            padding: "10px"
                                                        }
                                                    }>New York, USA</span>
                                                    <div className="p-1">
                                                        <Link to={`${data.link}`}  className="mb-2 d-block text-white fw-semibold nav-link" style={
                                                            {
                                                                fontSize : "21px"
                                                            }
                                                        }>100 Property Listing</Link>
                                                        <Link to={`${data.link}`} className="properties_see_all">See All Listing </Link>
                                                    </div>
                                                </div>
                                            </div>
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