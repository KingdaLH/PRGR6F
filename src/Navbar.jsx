import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-purple-300 p-4">
            <Link to="/" className="text-white mr-4">
                Home
            </Link>
            <Link to="/cards/create" className="text-white">
                Create
            </Link>
        </nav>
    );
};

export default Navbar;