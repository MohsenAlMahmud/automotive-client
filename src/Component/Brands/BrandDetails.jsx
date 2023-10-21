import { useLoaderData, useParams } from "react-router-dom";
import IndivisualBrandProduct from "./IndivisualBrandProduct";


const BrandDetails = () => {
    const brandNames = useLoaderData();
    const { brand } = useParams();
    const brandName = brandNames.find(brandName => brandName.brand == brand);
    // console.log(brandName);


    // const { adv_image_1, adv_image_2, adv_image_3 } = brandDetail;


    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item flex relative w-full h-[950px]">
                    <div className="md:card md:card-side bg-base-100 gap-10 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/PgXNdc0/toyota-1.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                                <h1 className="text-5xl font-bold pb-10">TOYOTA</h1>
                                <h2 className="card-title pt-10">Cutting-Edge Tech:</h2>
                                <p>Explore the future with Toyota's state-of-the-art tech, ensuring a safe and connected driving experience.</p>
                                <h2 className="card-title pt-10">Dependable Quality:</h2>
                                <p>Trust in Toyota's proven quality and reliability for a worry-free journey.</p>
                                <h2 className="card-title pt-10">Eco-Friendly Innovation:</h2>
                                <p>Drive green with Toyota's sustainable, eco-friendly vehicles, reducing your carbon footprint.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="md:card md:card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/P5JVqD6/ford-3.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                            <h1 className="text-5xl font-bold pb-10">FORD</h1>
                                <h2 className="card-title pt-10">Legendary Performance:</h2>
                                <p>Elevate your driving experience with Ford's unmatched performance and innovation, embracing a legacy of power and precision.</p>
                                <h2 className="card-title pt-10">Trusted Heritage:</h2>
                                <p>Rely on Ford's rich history of quality and endurance for a journey filled with confidence and dependability.</p>
                                <h2 className="card-title pt-10">Trailblazing Innovation:</h2>
                                <p>Blaze new trails with Ford's groundbreaking innovations, driving towards a future where every road leads to adventure.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[950px]">
                    <div className="md:card md:card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/gt5Xjy2/bmw-1.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                            <h1 className="text-5xl font-bold pb-10">BMW</h1>
                                <h2 className="card-title pt-10">Ultimate Driving Experience:</h2>
                                <p>Elevate your drive with BMW's commitment to the ultimate driving experience, where luxury, performance, and precision meet on every journey.</p>
                                <h2 className="card-title pt-10">Timeless Elegance:</h2>
                                <p>Embrace the timeless elegance of BMW, where design meets artistry to create a sense of style that endures through the ages.</p>
                                <h2 className="card-title pt-10">Leading the Future:</h2>
                                <p>Join BMW in shaping the future of mobility with cutting-edge innovations that redefine what's possible on the road, making every drive an adventure into the future.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[950px]">
                    <div className="md:card md:card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/3fgW8PT/Mercedes-Benz-1.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                            <h1 className="text-5xl font-bold pb-10">MERCEDES-BENZ</h1>
                                <h2 className="card-title pt-10">Exquisite Craftsmanship:</h2>
                                <p>Experience the epitome of automotive craftsmanship with Mercedes-Benz, where precision engineering and attention to detail result in vehicles of unparalleled quality and luxury.</p>
                                <h2 className="card-title pt-10">Innovation Beyond Imagination:</h2>
                                <p>Mercedes-Benz leads the way in automotive innovation, offering cutting-edge technology, safety features, and performance, ensuring you drive with confidence into the future.</p>
                                <h2 className="card-title pt-10">Timeless Elegance:</h2>
                                <p>Embrace the timeless elegance of Mercedes-Benz, where iconic design and a rich heritage combine to create a sense of style and sophistication that transcends generations.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[950px]">
                    <div className="md:card md:card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/8j4tDNT/Tesla-1.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                            <h1 className="text-5xl font-bold pb-10">TESLA</h1>
                                <h2 className="card-title pt-10">Electric Revolution:</h2>
                                <p>Join the electric revolution with Tesla, where innovation and sustainability meet to redefine the future of driving. Experience zero-emission vehicles and a cleaner, more efficient way to travel.</p>
                                <h2 className="card-title pt-10">Autonomous Driving:</h2>
                                <p>Tesla is at the forefront of autonomous driving technology, providing cutting-edge features that lead the way in safety and convenience, making every journey a step towards the future of self-driving cars.</p>
                                <h2 className="card-title pt-10">Unrivaled Performance:</h2>
                                <p>Tesla combines electric power with unmatched performance. Accelerate into the future with the exhilarating speed and cutting-edge engineering that only Tesla can offer.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[950px]">
                    <div className="md:card md:card-side bg-base-100 shadow-xl">
                        <figure className="flex-1"><img src="https://i.ibb.co/dJj0NB3/Honda-1.jpg" className="w-full" /></figure>
                        <div className="flex justify-center items-center flex-1 p-10">
                            <div className="py-10 px-10">
                            <h1 className="text-5xl font-bold pb-10">HONDA</h1>
                                <h2 className="card-title pt-10">Reliable Performance:</h2>
                                <p>Choose Honda for dependable performance and longevity, backed by a reputation for quality and reliability that you can trust on every journey.</p>
                                <h2 className="card-title pt-10">Innovative Efficiency: </h2>
                                <p>Experience innovative engineering with Honda's fuel-efficient and eco-friendly solutions, contributing to a greener future without compromising on performance.

</p>
                                <h2 className="card-title pt-10">Versatile Mobility:</h2>
                                <p>Honda offers a versatile range of vehicles, from compact cars to SUVs, catering to a wide array of lifestyles and preferences. Enjoy versatility and practicality in every Honda model.</p>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <IndivisualBrandProduct brandName={brandName}></IndivisualBrandProduct>
        </div>
    );
};

export default BrandDetails;