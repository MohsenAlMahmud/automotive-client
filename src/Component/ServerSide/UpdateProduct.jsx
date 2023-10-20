import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {

    const singleData = useLoaderData();
    console.log(singleData);

    const handleUpdate = (e) =>{
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const updateData = { image, name, brand, type, price, shortDescription, rating};
        console.log(updateData);

        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateData),

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            form.reset();
        })


    }


    return (
        <div className="w-9/12 mx-auto">

            <h2 className="text-4xl text-center py-16">Update Existing Product</h2>
            <form onSubmit={handleUpdate}  className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Insert Image URL</span>
                    </label>
                    <input type="text" defaultValue={singleData?.image} name="image" placeholder="Image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Name</span>
                    </label>
                    <input type="text" defaultValue={singleData?.name} name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Brand Name</span>
                    </label>
                    <input type="text" defaultValue={singleData?.brand} name="brand" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Type</span>
                    </label>
                    <input type="text" defaultValue={singleData?.type} name="type" placeholder="Type" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Prise</span>
                    </label>
                    <input type="text" defaultValue={singleData?.price} name="price" placeholder="$ Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description About Product</span>
                    </label>
                    <input type="text" defaultValue={singleData?.shortDescription} name="shortDescription" placeholder="Description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Rating</span>
                    </label>
                    <input type="text" defaultValue={singleData?.rating} name="rating" placeholder="Rating" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Product</button>
                </div>

            </form>


        </div>
    );
};

export default UpdateProduct;