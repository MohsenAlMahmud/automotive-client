import { useState } from "react";
import { Link, useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";


const IndivisualBrandProduct = ({ brandName }) => {
    
    console.log(brandName);
    const [alert, setAlert] = useState(false);
    if (!brandName || !brandName.brand) {
        if(!alert){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There is no product available now',
                footer: '<a href="">Why do I have this issue?</a>'
              });
            setAlert(true);
        }
        return null;
    }

    const brand = brandName.brand;
    

    const users = useLoaderData();
    // console.log(users._id);

    // const { brand } = useParams();
    const filteredUsers = users.filter(user => user.brand == brand);
    

    // const brandTypeToDisplay = "BMW";
    // const filteredUsers = users.filter(user => user.brand == brandTypeToDisplay);

    return (
        <div>
            <h1 className="text-5xl font-bold text-center pb-6">{brand}</h1>
            <div className="grid grid-cols-3">
                { filteredUsers.map(product => (
                    <div key={product._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <h2 className="card-title">{product.type}</h2>
                                <p>{product.price}</p>
                                <p>{product.rating}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/productDetails/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                                    <Link to={`/updateProduct/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))};
                
            </div>
        </div>
    );
};

export default IndivisualBrandProduct;