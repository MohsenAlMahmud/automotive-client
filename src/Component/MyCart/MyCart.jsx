import { useLoaderData } from "react-router-dom";



const MyCart = () => {
    const products = useLoaderData();
    console.log(products);  

    return (
        <div>
            <h2>Cart : {} </h2>
            <div className="grid grid-cols-3">
            
            </div>
        </div>
    );
};

export default MyCart;