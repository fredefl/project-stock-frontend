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
      jobtype: PropTypes.string.isRequired,
    }).isRequired
  };

  render() {
    const { msg, advisor } = this.props;

    return (
      <Link to={`/profile/${advisor.id}`}>
        <Card className="advisor-card">
          <div className="avatar">
            <img width="110" height="110" src={`${advisor.imageUrl}`} />
          </div>

          <h1>{advisor.name}</h1>
          <h2>{advisor.jobtype}</h2>
          <CardActions>
            <FlatButton label="Profil" containerElement={<Link to={`/profile/${advisor.id}`} />}>
            </FlatButton>
          </CardActions>
        </Card>
      </Link>
    );
  }

}

AdvisorCard = connect(state => ({
}))(AdvisorCard);

export default AdvisorCard;
