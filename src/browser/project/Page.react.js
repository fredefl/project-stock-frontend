import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProjectAuthorCard from './ProjectAuthorCard.react';
import ProjectCard from './ProjectCard.react';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project :{
          "id": 1,
          "title" : "NanoRobot Teknologi",
          "subtitle": "Bachelor Project",
          "author": {
            "id": 1,
            "name": "Torben Mogensen",
            "title": "Professor i Datalogi",
            "presentation": `Undervisnings- og vejledningsområder

            Compilers, programming language technology, language design, games.
            Aktuel forskning

            Domain-specific languages, program semi-inversion.

            Primære forskningsområder
            Automatic program analysis and transformation (in particular partial evaluation and program semi-inversion), compiler technology (in particular for functional languages), domain-specific languages and occasionally algorithms, complexity, automata theory, fractals and graphics.`
          },
          "description": '<p></p>'
        }
    }
  }

  static propTypes = {
  };

  render() {
    const { } = this.props;

    return (
      <div className="project-page">
        <Helmet title="Project" />

        <ProjectCard project={this.state.project} />
        <ProjectAuthorCard project={this.state.project} />
      </div>
    );
  }

}

Page = connect(state => ({
}))(Page);

export default Page;
