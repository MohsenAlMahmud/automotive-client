import {   useLoaderData,  useParams, } from "react-router-dom";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(product => product._id == id);
    // console.log(product);
    

    const handleCart = (e) =>{
        e.preventDefault();

        const form = e.target;        
        const _id = form._id;
        

        const cartData = {_id};
        console.log(cartData);
        

        

        fetch('https://automotive-server-nine.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cartData),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4">{product.name}</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="pic" /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p>{product.detailDescription}</p>
                    <div className="card-actions justify-end">
                        <form onSubmit={handleCart}>
                        <button className="btn btn-primary">Add To Cart</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;