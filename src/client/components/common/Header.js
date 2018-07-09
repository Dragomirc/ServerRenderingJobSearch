import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import reedLogo from "../../images/reed-logo.png";

const Header = ({ auth = false }) => {
  const authButton = auth ? <a href="/">Logout</a> : <a href="/">Login</a>;
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="brand-logo">
              <img src={reedLogo} alt="Reed logo" />
            </Link>
          </li>
        </ul>
        <li>
          <Link to="/">Courses</Link>
        </li>
        <li>
          <Link to="/">Carrer advice</Link>
        </li>
        <ul>
          <li>
            <Link to="/">Register CV</Link>
          </li>
          <li>
            <Link to="/">Sign in</Link>
          </li>
          <li>
            <Link to="/">Shortlisted jobs</Link>
          </li>
          <li>
            <Link to="/">Recruiting</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// const mapStateToProps = ({ auth }) => ({ auth });
// export default connect(mapStateToProps)(Header);
