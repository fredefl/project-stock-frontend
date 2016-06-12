import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, CardText, List, ListItem, Divider} from 'material-ui';

class AdvisorsList extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    advisors: PropTypes.any.isRequired
  };

  render() {
    const { msg, advisors } = this.props;

    return (
      <Card className="advisors__list__card">
        <h2 className="text-center">Advisors</h2>
        <List>
          {advisors.map(advisor =>
            <ListItem key={advisor.id} primaryText={advisor.name} secondaryText={advisor.jobtype} containerElement={<Link to={"/profile/" + advisor.id} />} />
          )}
        </List>
      </Card>
    );
  }

}

AdvisorsList = connect(state => ({
}))(AdvisorsList);

export default AdvisorsList;
