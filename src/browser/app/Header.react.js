import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import '../styles/Header.styl';

class Header extends Component {

  static propTypes = {
    viewer: PropTypes.object
  };

  render() {
    const { viewer } = this.props;

    return (
      <header>
        <ul>
          <li>
            <Link to="/home" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/projects" activeClassName="active">Projects</Link>
          </li>
          <li>
            <Link to="/advisors" activeClassName="active">Advisors</Link>
          </li>
          <li>
            <Link to="/sections" activeClassName="active">Sections</Link>
          </li>
        </ul>
        <ul className="right">
          <li style={{float: "right"}}>
            <Link to="/login/email" activeClassName="active">Login</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default connect(state => ({
  viewer: state.users.viewer
}))(Header);
