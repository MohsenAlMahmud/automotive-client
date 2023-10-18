import { useLoaderData } from "react-router-dom";


const DisplayUserInput = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>User Input: </h2>
            <div>
                {users.map(user => (
                    <div key={user._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{user.name }</h2>
                                <h2 className="card-title">{user.type }</h2>
                                <p>{user.price}</p>
                                <p>{user.shortDescription}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                    <button className="btn btn-primary">Update</button>
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