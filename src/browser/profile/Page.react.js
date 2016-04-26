import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fetch from '../../common/components/fetch'
import * as advisorsActions from '../../common/advisors/actions'
import ProfileCard from './ProfileCard.react';
import ProjectsList from './ProjectsList.react';
import PublicationsList from './PublicationsList.react';

/* Material UI */
import {List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    const { advisors, loading } = this.props.advisors;

    const { id } = this.props.params;

    const advisor = advisors.get(id);
    
    if (!advisor)
      return <div>No advisor found</div>


    return (
      <div className="profile-page">
        <Helmet title={"Profile - " + advisor.name} />

        <ProfileCard advisor={advisor} key={advisor.id} />

        {/*<ProjectsList projects={advisor.projects} />

        <PublicationsList publications={advisor.publications} />*/}
      </div>
    );
  }

}

Page = fetch(advisorsActions.getAdvisor)(Page)

export default connect(state => ({
  advisors: state.advisors
}), { ...advisorsActions })(Page)