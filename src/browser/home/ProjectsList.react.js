import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

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
      description: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    })).isRequired
  };

  render() {
    const { msg, projects } = this.props;

    return (
      <Card className="projects__list__card">
        <h2 className="text-center">Projects</h2>
        <List>
          {projects.map(project =>
            <ListItem key={project.id} primaryText={project.title} secondaryText={project.author.name} />
          )}
        </List>
      </Card>
    );
  }

}

ProjectsList = connect(state => ({
}))(ProjectsList);

export default ProjectsList;
