import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-primary p-3">
                <div className="container-fluid gap-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <h3 className='text-white'>My Blog</h3>
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Add</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/Contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header