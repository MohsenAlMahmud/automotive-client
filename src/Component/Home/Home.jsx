import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Brands from "../Brands/Brands";
import Footer from "./Footer";


const Home = () => {

    const brands = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <h2>This is home</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    brands.map(brand => <Brands key={brands.id} brand={brand}></Brands>)
                }
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;