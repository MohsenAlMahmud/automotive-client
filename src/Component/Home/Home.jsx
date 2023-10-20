import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Brands from "../Brands/Brands";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import AreasWeService from "./AreasWeService";




const Home = () => {

    const brands = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            
            <div className="grid grid-cols-3 gap-10">
                {
                    brands.map(brandName => <Brands key={brandName.id} brandName={brandName}></Brands>)
                }
            </div>
            <WhyChooseUs></WhyChooseUs>
            <AreasWeService></AreasWeService>
                       
            <Footer></Footer>

        </div>
    );
};

export default Home;