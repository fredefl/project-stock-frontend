import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
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
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    const { projects, loading } = this.props.projects;

    if ( ! projects )
      return <div>No projects found</div>

    return (
      <div>
        <Helmet title={"Projects"} />
        <div className="projects">
          {projects.map(project => {
            return <ProjectCard project={project} key={project.id} />
          }
          )}
        </div>
      </div>
    );
  }

}

Page = fetch(projectsActions.getProjects)(Page)

export default connect(state => ({
  projects: state.projects
}), { ...projectsActions })(Page)

