import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { CgClose } from "react-icons/cg";
import { AiFillHome} from "react-icons/ai";

import { MdContactPhone} from "react-icons/md";

const Sidebar = (props) => {

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
        </Link>
        <button onClick={props.click}>
          <CgClose />
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="nav-sidebar-link">
          <Link to="/home" className="nav-anchor">
            <AiFillHome />
            <FormattedMessage id="home" defaultMessage="Home" />
          </Link>
        </div>
        <div className="nav-sidebar-link">
          <Link to="/" className="inner-nav-link">
            <MdContactPhone />
            <FormattedMessage id="Contact-Us" defaultMessage="Contact Us" />
          </Link>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;