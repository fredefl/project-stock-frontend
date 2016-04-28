import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SectionCard from './SectionCard.react';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections : [
        {
          "id": 1,
          "image": "http://www.diku.dk/forskning/hcc/grafik/top-hcc.jpg?size=505x174",
          "title": "HCC"
        }
      ]
    }
  }

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <div className="section-page">
        <Helmet title={"Sections"} />
        <div className="sections">
          {
            this.state.sections.map(section =>
              <SectionCard section={section} key={section.id} />
            )
          }
        </div>
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
