import { NavLink } from "react-router-dom";
import './style/navbarStyle.css';

export const Navbar = () =>{
    return(
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light bg-white 
                        py-4 shadow-sm">
            <div className="container header">
                <NavLink className="navbar-brand fw-bold fs-4 text-uppercase" to="/">
                CrudAppSystem
                </NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
                    <li className="nav-item">
                        <NavLink
                        className="nav-Link active text-uppercase"
                        aria-current="page"
                        to="/"
                        >
                        Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                        className="nav-Link active text-uppercase ms-3"
                        aria-current="page"
                        to="/list_user"
                        >
                        List user
                        </NavLink>
                    </li>
                    <li className="nav-item ms-3">
                        <NavLink
                        className="nav-Link active text-uppercase"
                        aria-current="page"
                        to="/about"
                        >
                        About
                        </NavLink>
                    </li>
                </ul>
                <li className='nav-link m-2'>
                    <NavLink  className="btn btn-light" to="/login" >
                        <i className="fa fa-sign-in me-1" ></i> Sign in
                    </NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink className="btn btn-light" to="/sing_up">
                        <i className="fa fa-user-plus me-2 ms" ></i> Sing up
                    </NavLink>
                </li>
                </div>
            </div>
            </nav>
          
        </div>
    );
};