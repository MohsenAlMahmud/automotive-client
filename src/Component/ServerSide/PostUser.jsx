

const PostUser = () => {

    const handlePostUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        // console.log(image, name, type, price, shortDescription);

        const userData = {image, name, type, price, shortDescription};
        console.log(userData);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <h2 className="text-5xl font-bold">User: </h2>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handlePostUser}>
                        <input type="text" name="image" placeholder="Image URL" id="" />



                        <input type="text" name="name" placeholder="name" id="" />

                        <input type="text" name="type" placeholder="type" id="" />

                        <input type="text" name="price" placeholder="price" id="" />

                        <input type="text" name="shortDescription" placeholder="Short Description" id="" />

                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostUser;