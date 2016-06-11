import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText} from 'material-ui';

class ProjectCard extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    project: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      author: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { msg, project } = this.props;



    return (
      <Card className="project__project__card">
        <CardTitle
          className="title"
          title={project.title}
          subtitle={project.subtitle}
        />
        <CardText className="text">
          {project.description}
        </CardText>
        <CardActions className="actions">
        </CardActions>
      </Card>
    );
  }

}

ProjectCard = connect(state => ({
}))(ProjectCard);

export default ProjectCard;
