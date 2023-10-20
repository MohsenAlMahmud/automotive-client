import Swal from "sweetalert2";


const PostUser = () => {

    const handlePostUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const detailDescription = form.detailDescription.value;
        // console.log(image, name, type, price, shortDescription);

        const userData = { image, name, brand, type, price, shortDescription, rating, detailDescription };
        console.log(userData);

        fetch('https://automotive-server-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There is no product available now',
                    footer: '<a href="">Why do I have this issue?</a>'
                  });
                  form.reset();
            })

    }
    return (
        <div className="w-9/12 mx-auto">

            <h2 className="text-4xl text-center py-16">Add New Product</h2>
            <form onSubmit={handlePostUser} className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Insert Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Brand Name</span>
                    </label>
                    <input type="text" name="brand" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Type</span>
                    </label>
                    <input type="text" name="type" placeholder="Type" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Product Prise</span>
                    </label>
                    <input type="text" name="price" placeholder="$ Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description About Product</span>
                    </label>
                    <input type="text" name="shortDescription" placeholder="Description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Detail Description</span>
                    </label>
                    <input type="text" name="detailDescription" placeholder="Detail Description" className="input input-bordered" />
                </div>
                

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Product</button>
                </div>

            </form>


        </div>
    );
};

export default PostUser;