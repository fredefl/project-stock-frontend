import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard.react';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects : [
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
      <div>
        <Helmet title={"Projects"} />
        <div className="projects">
          {
            Array(10).fill().map((x, i) =>
              <ProjectCard project={this.state.projects[0]} key={i} />
          )}
        </div>
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
