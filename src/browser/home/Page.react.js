import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import fetch from '../../common/components/fetch';
import * as advisorsActions from '../../common/advisors/actions';
import * as projectsActions from '../../common/projects/actions';

import ProjectsList from './ProjectsList.react';
import AdvisorsList from './AdvisorsList.react';

/* Material UI */
import {TextField, List, ListItem, Card} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  static propTypes = {
  };

  filter = (data, property) => 
    data.filter(e => 
      e[property].toLowerCase().indexOf(this.state.query.toLowerCase()) > -1)

  render() {
    const { advisors } = this.props.advisors;
    const { projects } = this.props.projects;

    return (
      <div className="home-page">
        <Helmet title="Project Stock" />

        <Card className="search__card">
          <i className="material-icons">search</i>
          <input type="text" onChange={e => this.setState({query: e.target.value})} placeholder="Search"/>
        </Card>

        <ProjectsList projects={this.filter((projects || []), 'title').slice(0, 4)} />
        <AdvisorsList advisors={this.filter((advisors || []), 'name').slice(0, 4)} />
      </div>
    );
  }
}

Page = fetch(advisorsActions.getAdvisors, projectsActions.getProjects)(Page)

export default connect(state => ({
  advisors: state.advisors,
  projects: state.projects
}), { ...advisorsActions, ...projectsActions })(Page)
