import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="home-button">Home Page</Link>
        </div>
    );
};

export default Navbar;