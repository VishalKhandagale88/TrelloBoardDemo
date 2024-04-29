import { FC } from "react";
import AppsLogo from "../../assets/AppsLogo";
import HomeLogo from "../../assets/HomeLogo";
import TrelloLogo from "../../assets/TrelloLogo";
import PlusLogo from "../../assets/PlusLogo";
import InfoIcon from "../../assets/InfoIcon";
import NotificationLogo from "../../assets/NotificationLogo";
import UserLogo from "../../assets/UserLogo";

const Header: FC = () => {
  return (
    <>
      <div className="container-fluid border">
        <div className="row">
          <div className="col d-flex align-items-center">
            <div className="row">
              <div className="col-2 btn border">
                <AppsLogo />
              </div>
              <div className="col-2 btn border">
                <HomeLogo />
              </div>
              <div className="col">
                <nav className="navbar bg-body-tertiary">
                  <div className="container-fluid">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="row">
              <div className="col d-flex justify-content-center">
                <TrelloLogo />
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <div className="row">
              <div className="col btn border">
                <PlusLogo />
              </div>
              <div className="col btn border">
                <InfoIcon />
              </div>
              <div className="col btn border">
                <NotificationLogo />
              </div>
              <div className="col btn border">
                <UserLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="row vh-100 overflow-hidden">
          <div className="col-1 bg-info">sddsjhvsd</div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
