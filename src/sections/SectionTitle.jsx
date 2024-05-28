import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function SectionTitle({subTitle,title,ani}){
    useEffect(()=>{
        AOS.init();
    },[]);
    return (
        <>
            <div>
                <div className="container">
                    <div data-aos={ani} className="text-center globa_title_container">
                        <span className="text-uppercase fw-bold">
                            {subTitle}
                        </span>
                        <h1 className="mt-2">{title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}