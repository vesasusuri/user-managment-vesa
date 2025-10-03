import { FormattedMessage } from "react-intl";
import "./banner.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
       <h1>
          <FormattedMessage
            id="home-banner-title"
            defaultMessage="UManage"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="Easily manage your clients with UManage. Find details, create new records, and stay in control all in one place."
          />
        </p>
        <p>
          <Link className="button2">
            <BsTelephoneFill className="iconPhone"/>
            <FormattedMessage id="Contact-Us" defaultMessage="Contact Us" />
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Banner;