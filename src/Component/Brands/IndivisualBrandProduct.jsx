import { useLoaderData,  } from "react-router-dom";


const IndivisualBrandProduct = ({brandName}) => {

    const brand = brandName.brand;

    const users = useLoaderData();
    // console.log(users);

    // const { brand } = useParams();
    const filteredUsers = users.filter(user => user.brand == brand);

    // const brandTypeToDisplay = "BMW";
    // const filteredUsers = users.filter(user => user.brand == brandTypeToDisplay);

    return (
        <div>
            <h1>Products for {brand}</h1>
            <div className="grid grid-cols-3">
                {filteredUsers.map(product => (
                    <div key={product._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name }</h2>
                                <h2 className="card-title">{product.type }</h2>
                                <p>{product.price}</p>
                                <p>{product.shortDescription}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndivisualBrandProduct;