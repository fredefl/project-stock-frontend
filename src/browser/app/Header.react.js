import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import '../styles/Header.styl';

class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const { msg, viewer } = this.props;

    return (
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projekter</Link>
          </li>
          <li>
            <Link to="/advisors">Vejledere</Link>
          </li>
        </ul>
        <ul className="right">
          <li style={{float: "right"}}>
            <Link to="/login/email">Login</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default connect(state => ({
  msg: state.intl.msg.app.links,
  viewer: state.users.viewer
}))(Header);
