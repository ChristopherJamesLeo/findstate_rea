

import Banner from "../sections/Banner";
import ChooseUs from "../sections/ChooseUs";
import Counter from "../sections/Counter";
import Offers from "../sections/Offers";
import Search from "../sections/Search";
import Properties from "../sections/Properties";

export default function Home(){
    return (
        <>  
            <Banner/>
            <Search ani={"fade-up"}/>
            
            <Offers ani={"fade-up"}/>
            <ChooseUs ani={"fade-up"}/>

            <Counter/>
            <Properties/>
        </>
    )
}