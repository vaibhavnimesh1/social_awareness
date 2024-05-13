import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = ({ settoggle, toggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (localStorage.getItem("adminData")) {
      localStorage.removeItem("adminData");

      // alert("");
      navigate(-2);
      window.location.reload();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand" onClick={() => settoggle(!toggle)}>
          <i className="fa-solid fa-bars fs-3 "></i>
        </span>

        <div className=" " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item">Setting</Link>
                </li>
                <li>
                  <Link className="dropdown-item" onClick={handleLogout}>
                    {/* <Link className="dropdown-item" > */}
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
