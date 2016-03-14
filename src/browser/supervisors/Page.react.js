import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supervisors : [
        {
          "id": 1,
          "title" : "NanoRobot Teknologi",
          "subtitle": "Bachelor Project",
          "author": {
            "id": 1,
            "name": "Torben Mogensen",
            "title": "Professor i Datalogi"
          },
          "description": '<p></p>'
        }
      ]
    }
  }

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <div className="home-page">
        <Helmet title={msg.title} />
        {this.state.supervisors.map(supervisor =>
          <p></p>
        )}
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
