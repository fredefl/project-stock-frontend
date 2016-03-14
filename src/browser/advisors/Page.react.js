import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AdvisorCard from './AdvisorCard.react';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      advisors : [
        {
          "id": 1,
          "name": "Stephen Alstrup",
          "title": "Professor i Datalogi",
          "phone": "+45 35 33 56 91",
          "email": "s.alstrup@di.ku.dk",
          "website": "https://sites.google.com/site/stephenalstrupsite/",
          "presentation": "",
          "sections": ["The APL Section"],
          "projects": [{
            "id": 1,
            "title": "sdkosdlsdklsdld",
            "subtitle": "kjsldssdskjd",
            "description": "jsdksjdskd"
          }],
          "publications": [{
            "id": 1,
            "year": 2016,
            "href": "http://diku.dk/Ansatte/?pure=da%2Fpublications%2Fsimpler-faster-and-shorter-labels-for-distances-in-graphs(90a385f4-4892-414d-a47f-ddb99f2f2155).html",
            "title": "Simpler, faster and shorter labels for distances in graphs",
            "category": "Forskning - fagfællebedømt › Paper"
          }]
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
      <div className="home-page">
        <Helmet title={msg.title} />
        {this.state.advisors.map(advisor =>
          <AdvisorCard advisor={advisor} key={advisor.id} />
        )}
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
