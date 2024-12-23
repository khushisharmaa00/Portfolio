import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/Images/logo-sub.png'
import LogoSubtitle from '../../assets/Images/logo-k.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Khushi" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/khushi-sharma-51898528a/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" />
        </a>
      </li>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://github.com/khushisharmaa00"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2x" />
        </a>
      </li>
      <li>
        <a target="blank" rel="noreferrer" href="https://x.com/khushisharmaa00">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" size="2x" />
        </a>
      </li>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.instagram.com/_khushi_._.__/"
        >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" size="2x" />
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
