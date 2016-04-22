import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, List, ListItem, Divider} from 'material-ui';

class ProjectsList extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  };

  render() {
    const { msg, projects } = this.props;

    return (
      <Card className="projects-list-card">
        <h2 className="text-center">Projects</h2>
        <List>
          {projects.map(project =>
            <ListItem key={project.id} primaryText={project.title} secondaryText={project.subtitle} />
          )}
        </List>
      </Card>
    );
  }

}

ProjectsList = connect(state => ({
}))(ProjectsList);

export default ProjectsList;
