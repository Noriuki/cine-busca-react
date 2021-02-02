import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className="header">
    <nav className="header__nav">
      <Link className="nav-link" to="/">
        <img
          className="nav-link__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAABMUlEQVR4nO3bwW6CUBRFUWn6/79Mx3VQSl5LNpe1xpqoO6gn5L1eAAAA19qOHrDv+37FC3mKbdt+/Mw/rnoh/I4gMYLEfJ59wtF34PtvztHj7+bs+zv7G+wKiREkRpAYQWIEiTn9L8ty/+6vPw9XSIwgMYLE/PtSn85SH06QGEFiBIkRJMZSX2SpDydIjCAxlvoiS304QWIEiREkRpAYS32RpT6cIDGCxFjqiyz14QSJESRGkBhBYpxTv5hz6jcjSIwgMc6pn+Sc+sMIEiNIjCAxgsS4p77IPfXhBIkRJMY99UWW+nCCxAgSI0iMIDGW+iJLfThBYgSJsdQXWerDCRIjSIwgMYLEWOqLLPXhBIkRJMZSX2SpDydIjCAxgsQIEuOc+sWcU78ZQWIEAQAAeLgvud2Ekjoxr1AAAAAASUVORK5CYII="
          alt="logo"
        />
        <h2 className="nav-link__title">CineBusca</h2>
      </Link>
    </nav>
  </div>
);

export default Header;
