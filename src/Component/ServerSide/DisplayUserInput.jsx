import { Link, useLoaderData } from "react-router-dom";


const DisplayUserInput = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div className="w-9/12 mx-auto gap-6">
            <h2 className="text-5xl font-bold text-center my-6">User Input: </h2>
            <div className="grid grid-cols-3">
                {users.map(user => (
                    <div key={user._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={user.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{user.name }</h2>
                                <h2 className="card-title">{user.type }</h2>
                                <p>{user.price}</p>
                                <p>{user.shortDescription}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                    <Link to={`/updateProduct/${user._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default DisplayUserInput;