import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser()
      .then(() => console.log('logged out successfully'))
      .catch((error) => console.error(error));
  };

  return (
    <header className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">AUTH CONCEPTUAL</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            {/* <li>
              <NavLink to="/orders">Orders</NavLink>
            </li> */}
          </ul>
          {user && (
            <>
              {user.displayName || user.email}
              <button onClick={handleLogOut} className="btn ">
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
