import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

class PublicationsList extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    publications: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string
    })).isRequired
  };

  render() {
    const { msg, publications } = this.props;

    return (
      <Card className="publications-list-card">
        <h2 className="text-center">Publications</h2>
        <List>
          {publications.map(publication =>
            <ListItem key={publication.id} primaryText={publication.title} secondaryText={publication.type} />
          )}
        </List>
      </Card>
    );
  }

}

PublicationsList = connect(state => ({
}))(PublicationsList);

export default PublicationsList;
