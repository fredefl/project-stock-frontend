import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, List, ListItem, Divider, CardText} from 'material-ui';

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
      advisors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })).isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { msg, project } = this.props;



    return (
      <Card className="projects__card">
        <Link to={`/advisor/${project.advisors[0].id}`}>
        <CardHeader
          className="header"
          title={project.advisors[0].name}
          subtitle={project.advisors[0].jobtype}
          avatar={`${project.advisors[0].imageUrl}`}
        />
        </Link>
        <CardTitle
          className="title"
          title={project.title}
          subtitle={project.subtitle}
        />
        <CardText className="text">
          {project.short_description}
        </CardText>
        <CardActions className="actions">
          <FlatButton label="View" containerElement={<Link to={`/project/${project.id}`} />} />
        </CardActions>
      </Card>
    );
  }

}

ProjectCard = connect(state => ({
}))(ProjectCard);

export default ProjectCard;
