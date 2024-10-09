import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/movie-logo.svg";

function NavBar() {
  return (
    <div>
      <nav className="navbar flex px-3 py-4 h-16 items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          {/* <span className="text-white text-lg font-bold ml-2">MyLogo</span> */}
        </div>
        <div className="ml-6">
          <Link to="/" className="text-sky-500 mx-2 font-bold text-2xl">
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="text-sky-500 mx-2 font-bold text-2xl"
          >
            WatchList
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
