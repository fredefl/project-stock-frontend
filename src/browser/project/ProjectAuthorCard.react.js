import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText} from 'material-ui';

class ProjectAuthorCard extends Component {

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
        title: PropTypes.string.isRequired,
        presentation: PropTypes.string
      }).isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { msg, project } = this.props;



    return (
      <Card className="project__author__card">
        <div className="avatar">
          <img src={`http://placebee.co.uk/100x100/${project.author.id}`} />
        </div>

        <h1>{project.author.name}</h1>
        <h2>{project.author.title}</h2>

        <div className="presentation">
          {project.author.presentation}
        </div>

        <CardActions className="actions">
          <FlatButton label="Profil" containerElement={<Link to={`/profile/${project.author.id}`} />} />
        </CardActions>
      </Card>
    );
  }

}

ProjectAuthorCard = connect(state => ({
}))(ProjectAuthorCard);

export default ProjectAuthorCard;
