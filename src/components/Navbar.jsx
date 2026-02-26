import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Web Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/order">Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/chatbot">WaiterBot</NavLink>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;