import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const brands = useLoaderData();
    const {id} = useParams();
    const brand = brands.find(brand => brand.id == id);
    // console.log(brand)
    // const { adv_image_1, adv_image_2, adv_image_3 } = brandDetail;

    return (
        <div className="">
            <div className="carousel w-full">


                <div id="slide1" className="carousel-item relative w-full h-[950px]">
                <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src={brand.adv_image_1} className="w-full" /></figure>
                        <div className="card-body flex-1">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src={brand.adv_image_2} className="w-full" /></figure>
                        <div className="card-body flex-1">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[950px]">
                <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src={brand.adv_image_3} className="w-full" /></figure>
                        <div className="card-body flex-1">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    );
};

export default BrandDetails;