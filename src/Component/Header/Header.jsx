import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Header = () => {

    // const [darkMode, setDarkMode] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);

    //   };
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            <li><NavLink to="/addProduct">Add Product</NavLink></li>
                            <li><NavLink to="/myCart">My Cart</NavLink></li>
                        </ul>
                    </div>
                    <img className="w-24 h-16" src="https://i.ibb.co/d09vfYN/Screenshot-2023-10-18-024901.png" alt="" />
                    <div className="form-control">
                        <label className="label cursor-pointer p-3">
                            <span className="label-text">Theme</span>
                            <input type="checkbox" className="toggle"  />
                        </label>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/addProduct">Add Product</NavLink></li>
                        <li><NavLink to="/myCart">My Cart</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <><span className="">{user.email}</span><span className=""><img className="w-12 rounded-full" src={user.photoURL ? user.photoURL : "https://i.ibb.co/MSHTpdv/user.jpg"} alt="picture" /></span><button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button></>

                            :
                            <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;