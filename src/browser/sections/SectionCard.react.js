import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, List, ListItem, Divider, CardText} from 'material-ui';

class SectionCard extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    section: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  };

  render() {
    const { msg, section } = this.props;



    return (
      <Card className="section__card">
        <div className="avatar" style={{"display": "inline"}}>
          <img width="400" height="130" src={section.image} />
        </div>

        <h1>{section.title}</h1>
        <h2>{section.description}</h2>
        <CardActions>
          <FlatButton label="Section" containerElement={<Link to={`/section/${section.id}`} />} />
          <FlatButton label="Subscribe" containerElement={<a></a>} />
        </CardActions>
      </Card>
    );
  }

}

SectionCard = connect(state => ({
}))(SectionCard);

export default SectionCard;
