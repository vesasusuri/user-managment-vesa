import { FormattedMessage } from "react-intl"
import {FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaYoutube} from 'react-icons/fa';

export const SocialMedia = [
    {
        to:'/',
        icon: <FaFacebookF />
    },
    {
        to:'/',
        icon: <FaInstagram />
    },
    {
        to:'/',
        icon: <FaYoutube />
    },
    {
        to:'/',
        icon: <FaTwitter />
    }
]

export const FooterData = [
    {
        category:<FormattedMessage id='Company' defaultMessage='Company' />,
        links:[
            {
                link: <FormattedMessage id='About-Us' defaultMessage='About Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Our-Team' defaultMessage='Our Team' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Our-Work' defaultMessage='Our Work' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Partners' defaultMessage='Partners' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Clients' defaultMessage='Clients' />,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id='Services' defaultMessage='Services' />,
        links:[
            {
                link: <FormattedMessage id='User-Management' defaultMessage='User Management' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Web-Services' defaultMessage='Web Services' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='All-Services' defaultMessage='All Services' />,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id='Support' defaultMessage='Support' />,
        links:[
            {
                link: <FormattedMessage id="Contact-Us" defaultMessage='Contact Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="Blog" defaultMessage='Blog' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="Q-A" defaultMessage='Q&A' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="Affiliates" defaultMessage='Affiliates' />,
                to:'/'
            }
        ]
    },
    {
        category:<FormattedMessage id='Trust' defaultMessage='Trust' />,
        links:[
            {
                link: <FormattedMessage id='User-Trust' defaultMessage='User Trust' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Guidelines' defaultMessage='Guidelines' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Privacy-Policy' defaultMessage='Privacy Policy' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Terms-Of-Use' defaultMessage='Terms of use' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Responsibility' defaultMessage='Responsibility' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='Security' defaultMessage='Security' />,
                to:'/'
            }
        ]
    }
]