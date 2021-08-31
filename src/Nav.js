import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <h1>Hey make your choice</h1>
      <NavLink to="/">Welcome</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
