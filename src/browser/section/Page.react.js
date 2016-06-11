import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AdvisorCard from '../advisors/AdvisorCard.react';

import fetch from '../../common/components/fetch';
import * as advisorsActions from '../../common/advisors/actions';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
  };

  render() {
    const {id} = this.props.params;

    const { advisors } = this.props.advisors;

    if ( ! advisors )
      return <div>No advisors found</div>

    return (
      <div className="advisors-page">
        <Helmet title={"Advisors in Section"} />
        <div className="advisors">
          {advisors.filter(advisor => advisor.section && advisor.section.id == id ).map(advisor => {
            return <AdvisorCard advisor={advisor} key={advisor.id} />
          }
          )}
        </div>
      </div>
    );
  }

}

Page = fetch(advisorsActions.getAdvisors)(Page)

export default connect(state => ({
  advisors: state.advisors
}), { ...advisorsActions })(Page)
