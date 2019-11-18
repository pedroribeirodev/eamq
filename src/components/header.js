import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/EAMQ.png"
import "../styles/header.scss"


const Header = () => (
  <header>
    <img src={Logo} />
    <ul>
      <li>Sobre a gente</li>
      <li>Eventos</li>
      <li>Fale Conosco</li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
