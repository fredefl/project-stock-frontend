import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

class ProfileCard extends Component {

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
      website: PropTypes.string.isRequired,
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
          <FlatButton label="Banan" />
        </CardActions>
      </Card>
    );
  }

}

ProfileCard = connect(state => ({
}))(ProfileCard);

export default ProfileCard;
