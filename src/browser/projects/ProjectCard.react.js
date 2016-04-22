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
      <Card className="projects__card">
        <CardHeader
          className="header"
          title={project.author.name}
          subtitle={project.author.title}
          avatar={`http://placebee.co.uk/100x100/${project.author.id}`}
        />
        <CardTitle
          className="title"
          title={project.title}
          subtitle={project.subtitle}
        />
        <CardText className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions className="actions">
          <FlatButton label="Banan" containerElement={<Link to={`/project/${project.id}`} />} />
        </CardActions>
      </Card>
    );
  }

}

ProjectCard = connect(state => ({
}))(ProjectCard);

export default ProjectCard;
