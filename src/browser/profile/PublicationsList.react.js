import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, List, ListItem, Divider} from 'material-ui';

class PublicationsList extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    publications: PropTypes.any
  };

  render() {
    const { msg, publications } = this.props;

    return (
      <Card className="publications-list-card">
        <h2 className="text-center">Publications</h2>
        <List>
          {publications.map(publication =>
            <ListItem key={publication.get('id')} primaryText={publication.get('title')} secondaryText={publication.get('publicationDate')} containerElement={<a target="_blank" href={publication.get('link')} />} />
          )}
        </List>
      </Card>
    );
  }

}

PublicationsList = connect(state => ({
}))(PublicationsList);

export default PublicationsList;
