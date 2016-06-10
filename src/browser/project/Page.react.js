import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProjectAuthorCard from './ProjectAuthorCard.react';
import ProjectCard from './ProjectCard.react';

import fetch from '../../common/components/fetch';
import * as projectsActions from '../../common/projects/actions';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
  };

  render() {
    const { projects, loading } = this.props.projects;

    const { id } = this.props.params;

    if ( ! projects )
      return <div>No projects found</div>

    const project = projects.get(id);

    if ( ! project )
      return <div>No project found</div>

    return (
      <div className="project-page">
        <Helmet title="Project" />

        <ProjectCard project={project} />
        <ProjectAuthorCard project={project} />
      </div>
    );
  }

}

Page = fetch(projectsActions.getProject)(Page)

export default connect(state => ({
  projects: state.projects
}), { ...projectsActions })(Page)
