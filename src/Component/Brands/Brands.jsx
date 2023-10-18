import { Link, } from "react-router-dom";



const Brands = ({ brand }) => {

    const { id, image, name } = brand;

    // const brands = useRouteLoaderData();
    // console.log(brands)

    return (
        <div>
            <Link to={`/brand/${id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default Brands;