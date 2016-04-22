import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText} from 'material-ui';

import './AdvisorCard.styl';

class AdvisorCard extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    advisor: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      phone: PropTypes.string,
      mobile: PropTypes.string,
      email: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      website: PropTypes.string,
      presentation: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.arrayOf(PropTypes.string).isRequired,
      institute: PropTypes.string,
      busy: PropTypes.number,
      cv: PropTypes.string,
      projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })).isRequired,
      publications: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }))
    }).isRequired
  };

  render() {
    const { msg, advisor } = this.props;

    return (
      <Card className="advisor-card">
        <div className="avatar">
          <img src={`http://placebee.co.uk/100x100/${advisor.id}`} />
        </div>

        <h1>{advisor.name}</h1>
        <h2>{advisor.title}</h2>
        <CardActions>
          <FlatButton label="Profil" containerElement={<Link to={`/profile/${advisor.id}`} />}>
          </FlatButton>
        </CardActions>
      </Card>
    );
  }

}

AdvisorCard = connect(state => ({
}))(AdvisorCard);

export default AdvisorCard;
