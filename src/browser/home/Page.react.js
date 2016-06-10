import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProjectsList from './ProjectsList.react';
import AdvisorsList from './AdvisorsList.react';

/* Material UI */
import {TextField, List, ListItem, Card} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
  };

  render() {
    const { msg } = this.props;

    return (
      <div className="home-page">
        <Helmet title="Project Stock" />

        <Card className="search__card">
          <i className="material-icons">search</i>
          <input type="text" placeholder="Search"/>
        </Card>

        <ProjectsList projects={this.state.projects} />
        <AdvisorsList advisors={this.state.advisors} />
      </div>
    );
  }
}

Page = connect(state => ({
}))(Page);

export default Page;
