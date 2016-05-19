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
          "title": "HCC",
          "description": "Human-Centred Computing"
        },
        {
          "id": 2,
          "image": "http://www.diku.dk/forskning/apl-gruppen/grafik/top-apl.jpg?size=505x174",
          "title": "APL",
          "description": "Algorithms and Programmring Languages"
        },
        {
          "id": 3,
          "image": "http://www.diku.dk/forskning/imagesection/grafik/top-image.jpg?size=505x174",
          "title": "Image",
          "description": "Image Section"
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
