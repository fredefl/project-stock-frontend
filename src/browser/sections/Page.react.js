import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SectionCard from './SectionCard.react';

import fetch from '../../common/components/fetch';
import * as sectionsActions from '../../common/sections/actions';

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
    const { sections, loading } = this.props.sections;

    if ( ! sections )
      return <div>No sections found</div>

    return (
      <div className="section-page">
        <Helmet title={"Sections"} />
        <div className="sections">
          {
            sections.map(section =>
              <SectionCard section={section} key={section.id} {...this.props} />
            )
          }
        </div>
      </div>
    );
  }

}

Page = fetch(sectionsActions.getSections)(Page)

export default connect(state => ({
  sections: state.sections
}), { ...sectionsActions })(Page)
