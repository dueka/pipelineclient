import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../assets/vectors/search.svg";
import no_avatar from "../assets/images/no_avatar.png";
import Emoji from "./Emoji";
const UserHeader = ({ location }: any) => {
  const [header, setHeader] = useState(false);

  const showHeader = () => setHeader(!header);
  const hideInLocation = ["/login", "/forgot-password"];
  const userImage = no_avatar;
  return (
    <div className="hide-on-print">
      <div
        className={`"" ${
          hideInLocation.includes(location.pathname) && "hide-nav"
        }`}
      >
        <div className="dashboard">
          <div className="dashboard-column">
            <div className="dashboard__header">
              <span className="heading-3 text-grey-600"> Howdy </span>{" "}
              <span className="heading-3-bold"> Darren</span>
              <Emoji symbol="🤟🏽" label="peace" />
            </div>
            <div className="dashboard__left">
              <button className="dashboard__menu-toggler">
                <span className="dashboard__menu-icon" data-tip="Search">
                  <SearchIcon />
                </span>
              </button>
            </div>

            <div className="dashboard__right">
              <div className="dashboard__right-text-1">
                <h2 className="dashboard__title heading-6-bold">
                  Darren Dolapo
                </h2>
              </div>
              <div className="dashboard__right-text-2">
                <h4 className="dashboard__title-1 body-text-6 text-grey-600">
                  RECRUITER
                </h4>
              </div>
              <div className="dashboard__right-text-3">
                <img
                  src={userImage}
                  alt="you"
                  className="dashboard__right-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(UserHeader);
