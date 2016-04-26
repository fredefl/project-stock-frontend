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
    this.state = {
      projects : [
        {
          "id": 1,
          "title" : "NanoRobot Teknologi",
          "subtitle": "Bachelor Project",
          "author": {
            "id": 1,
            "name": "Torben Mogensen",
            "title": "Professor i Datalogi"
          },
          "description": '<p></p>'
        },
        {
          "id": 2,
          "title" : "NanoRobot Teknologi",
          "subtitle": "Bachelor Project",
          "author": {
            "id": 1,
            "name": "Torben Mogensen",
            "title": "Professor i Datalogi"
          },
          "description": '<p></p>'
        },
        {
          "id": 3,
          "title" : "NanoRobot Teknologi",
          "subtitle": "Bachelor Project",
          "author": {
            "id": 1,
            "name": "Torben Mogensen",
            "title": "Professor i Datalogi"
          },
          "description": '<p></p>'
        }
      ],
      advisors: [
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
        },
        {
          "id": 2,
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
