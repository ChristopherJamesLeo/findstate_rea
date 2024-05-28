
import CountUp from "react-countup";
import {datas} from "./../datas/counter";

export default function  Counter(){
    return (
        <>
            <div className="counter_main_container">
                <div className=" py-5 counter_counter">
                    <div className="py-5 row">
                        {
                            datas.map(function(data){
                                return (
                                    <div key={data.id} className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                        <div className="couter_items_container">
                                            <div className="d-flex justify-content-center align-items-center counter_item">
                                                <div className="me-2 counter">
                                                    <CountUp
                                                    start = {0}
                                                    end = {data.count}
                                                    duration = {5}
                                                    className="count"/>
                                                </div>
                                                <span 
                                                
                                                className="counter_caption" style={
                                                    {
                                                        width : "100px",
                                                    }
                                                }> {data.caption}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}