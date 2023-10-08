import { NavLink } from "react-router-dom";

export default function Navigation() {
  const linkClassName = (params) => {
    return `navigation__link ${
      params.isActive ? "navigation__link--active" : ""
    }`;
  };

  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink className={linkClassName} to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink className={linkClassName} to="/completed">
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
