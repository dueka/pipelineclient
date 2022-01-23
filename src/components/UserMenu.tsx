import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import Logo from "../assets/images/ncoop-logo.png";
import { SidebarData } from "./SidebarData";
const UserMenu = ({ location, history }: any) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const hideInLocation = ["/login", "/forgot-password", "/desk"];
  return (
    <div className="hide-on-print">
      <div
        className={`"" ${
          hideInLocation.includes(location.pathname) && "hide-nav"
        }`}
      >
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="#" className="menu-bars">
            <img
              src={Logo}
              alt="cloudbank logo"
              className="img-fluid nav-menu_img"
            />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-menu-list nav-menu_logo">
              <img
                src={Logo}
                alt="cloudbank logo"
                className="img-fluid nav-menu_img"
              />
            </li>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="nav-menu-spacer">
              {SidebarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${item.cName} ${
                      item.paths.includes(location.pathname) && "menu-path"
                    }`}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span className="menu-span">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(UserMenu);
