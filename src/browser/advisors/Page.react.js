import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fetch from '../../common/components/fetch'
import * as advisorsActions from '../../common/advisors/actions'
import AdvisorCard from './AdvisorCard.react';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';

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

    if (!advisors)
      return <div>No advisors found</div>

    return (
      <div>
        <Helmet title={"Advisors"} />
        <div className="advisors">
          {advisors.map(advisor => {
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
