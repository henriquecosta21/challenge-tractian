import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
          <h2>
              <Link to={`/`}>Board</Link>
          </h2>
          <ul>
              <li>
                  <Link to={`/companies`}>Actives</Link>
              </li>
               <li>
                  <Link to={`/units`}>Units</Link>
              </li>
               <li>
                  <Link to={`/users`}>Users</Link>
              </li>
               <li>
                  <Link to={`/actives`}>Actives</Link>
              </li>
              <li>
                  <Link to={`/workorders`}>Workorders</Link>
              </li>
          </ul>
    </nav>
  )
}

export default Navbar