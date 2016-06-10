import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, Card, CardHeader, CardMedia, CardTitle, FlatButton, CardText} from 'material-ui';

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
    }).isRequired
  };

  render() {
    const { msg, advisor } = this.props;

    var busyLevels = ["", "Not busy", "Some load", "Modest load", "Pretty Loaded", "Very busy"];

    return (
      <Card className="profile-card">
        <div className="avatar">
          <img width="110" height="110" src={`${advisor.imageUrl}`} />
        </div>

        <h1>{advisor.name} <small>({busyLevels[advisor.busyLevel]})</small></h1>
        <h2>{advisor.jobtype}</h2>

        <div className="content">
          {/*(advisor.sections).map((section, key) =>
            <p key={key}>{section}</p>
          )*/}

          <div className="more">
            <address>
              <h4>{advisor.address}</h4>
            </address>

            {advisor.telephone ? [<i>Telephone:  </i>, <a href={`tel:${advisor.telephone}`}>{advisor.telephone}</a>, <br />] : null}
            {advisor.mobile ? [<i>Mobile:  </i>, <a href={`tel:${advisor.mobile}`}>{advisor.mobile}</a>, <br />] : null}
            {advisor.email ? [<i>Email:  </i>, <a href={`mailto:${advisor.email}`}>{advisor.email}</a>, <br />] : null}
            {advisor.website ? [<i>Website:  </i>, <a href={`${advisor.website}`}>{advisor.website}</a>, <br />] : null}

            {advisor.description ? <p dangerouslySetInnerHTML={{__html: advisor.description}}></p> : null}
          </div>
        </div>
      </Card>
    );
  }

}

ProfileCard = connect(state => ({
}))(ProfileCard);

export default ProfileCard;
