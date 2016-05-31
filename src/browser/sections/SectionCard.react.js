import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import fetch from '../../common/components/fetch';
import * as sectionsActions from '../../common/sections/actions';

/* Material UI */
import {Card, CardActions, CardHeader, CardMedia, CardTitle, FlatButton, List, ListItem, Divider, CardText, Snackbar } from 'material-ui';

class SectionCard extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
      subscribe_section_id: ''
    }
    this.subscribe = this.subscribe.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  static propTypes = {
    section: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired
  };

  subscribe () {
    const { section, dispatch } = this.props;

    dispatch(sectionsActions.subscribeToSection({}, {section_id: section.id}));
  }

  handleRequestClose () {
    const { dispatch } = this.props;

    dispatch(sectionsActions.closeSnackbar());
  };

  render() {
    const { msg, section, dispatch, sections } = this.props;

    var message = ( sections.subscribe_success == 'success' ) ? `Subscribed to the ${section.title} section` : "There was an error";

    return (
      <div>
        <Card className="section__card">
          <div className="avatar" style={{"display": "inline"}}>
            <img width="400" height="130" src={section.image} />
          </div>

          <h1>{section.title}</h1>
          <h2>{section.description}</h2>
          <CardActions>
            <FlatButton label="Section" containerElement={<Link to={`/section/${section.id}`} />} />
            <FlatButton label="Subscribe" containerElement={<a></a>} onClick={this.subscribe} />
          </CardActions>
        </Card>

        <Snackbar
          open={sections.subscribe_success == 'success' || sections.subscribe_success == 'error'}
          message={message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

}

SectionCard = fetch()(SectionCard)

export default connect(state => ({
  sections: state.sections
}), { ...sectionsActions })(SectionCard)
