import { NavLink } from "react-router-dom";

function NavItem({ href, item }) {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          `${
            isActive
              ? "pb-2 text-blue-300 hover:text-blue-200 border-b-2 border-blue-300"
              : "text-white hover:text-gray-200"
          }`
        }
      >
        {item}
      </NavLink>
    </li>
  );
}

export default NavItem;
