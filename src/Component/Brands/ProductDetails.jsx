import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(product => product._id == id);
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4">{product.name}</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="pic" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;