

const BrandDetails = () => {
    return (
        <div className="">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[950px]">

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/S5y36Mb/qijin-xu-JUkd-Ni-G9w3-I-unsplash.jpg" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"></h2>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/xXjYZXk/haryad-ali-HRtf-KS9y-PRU-unsplash.jpg" className="w-full" /></figure>
                        <div className="card-body">
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
                    <img src="https://i.ibb.co/qWq0vcL/francesco-la-corte-Bd2-MRjxm-Zec-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[950px]">
                    <img src="https://i.ibb.co/cYWtXrZ/hydra-berg-H29h-D8-Ulzi-M-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BrandDetails;