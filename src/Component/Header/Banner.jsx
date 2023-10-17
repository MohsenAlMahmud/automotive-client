

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen place-items-end" style={{ backgroundImage: 'url(https://i.ibb.co/HFrrqVn/banner.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">SALE</h1>
                        <p className="mb-5">CHRISTMAS SPECIAL</p>
                        <p className="mb-5">20% OFF</p>
                        <button className="btn btn-primary">GET A QUOTE TODAY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;