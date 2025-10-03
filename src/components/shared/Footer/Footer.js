import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FooterData, SocialMedia } from './data';
import { Link } from 'react-router-dom';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import './footer.scss';

const Footer = (props) => {
  const [mode] = useState(() => localStorage.getItem("mode"));

  return (
    <div className="shared-footer">
      <div className="main-row">
        <div className="first-col">
          <div className="top">
            <Link to="/" className="logo-container">
              <div className="logo"></div>
            </Link>
            <h5>
              <FormattedMessage
                id="footer-paragraph"
                defaultMessage="Manage users in the best way."
              />
            </h5>
            <p>
              <FormattedMessage id="PHONE" defaultMessage="PHONE" />: +383 48 771 188
            </p>
            <p>
              <FormattedMessage id="EMAIL" defaultMessage="EMAIL" />: vvesasusuri@gmailcom
            </p>
          </div>

          <div className="links1">
            {SocialMedia.map((item, idx) => (
              <Link key={`social-${idx}-${item.to}`} to={item.to}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="all-footer-links">
          {FooterData.map((section, idx) => (
            <div key={`footer-section-${idx}-${section.category}`} className="footer-list">
              <h6>{section.category}</h6>
              <div className="links">
                {section.links.map((l, i) => (
                  <Link key={`footer-link-${idx}-${i}-${l.to}`} to={l.to} className="footer-item">
                    {l.link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="last-row">
        <p>
          <FormattedMessage
            id="footer-paragraph2"
            defaultMessage="© 2025 Vesa A. Susuri  | ALL RIGHTS RESERVED"
          />
        </p>

        <SelectLanguage setLanguage={props.setLanguage} language={props.language} />
      </div>
    </div>
  );
};

export default Footer;
