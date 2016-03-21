import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ProfileCard from './ProfileCard.react';
import ProjectsList from './ProjectsList.react';
import PublicationsList from './PublicationsList.react';

/* Material UI */
import {List, ListItem} from 'material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "advisor": {
        "id": 1,
        "name": "Torben Ægidius Mogensen",
        "title": "Lektor",
        "phone": "+45 35 33 56 73",
        "mobile": "+45 21 84 96 72",
        "email": "torbenm@di.ku.dk",
        "link": "http://www.diku.dk/~torbenm",
        "institute": "Datalogisk Institut",
        "address": ["Bygning B, Bygning: 01-0-008", "2100 København Ø"],
        "sections": ["The APL Section"],
        "image": "https://www2.adm.ku.dk/selv/pls/prt_www40.hentindhold_cms?p_personid=162114",
        "projects": [
          {
            "id": 1,
            "title": "sdkosdlsdklsdld",
            "subtitle": "kjsldssdskjd",
            "description": "jsdksjdskd"
          },
          {
            "id": 2,
            "title": "sdkosdlsdklsdld",
            "subtitle": "kjsldssdskjd",
            "description": "jsdksjdskd"
          }
        ],
        "publications": [{
          "id": 2,
          "year": 2015,
          "href": "http://diku.dk/Ansatte/?pure=da%2Fpublications%2Fgarbage-collection-for-reversible-functional-languages(1e07d974-6d79-45eb-afa7-d0915b415b78).html",
          "title": "Garbage collection for reversible functional languages",
          "type": "Forskning - fagfællebedømt › Konferencebidrag i proceedings"
        }],
        "busy": 5,
        "cv": `Sprogkundskaber
        Danish, English and a smattering of German and Romanian.
        Uddannelse
        Lic. Scient`,
        "presentation": `Undervisnings- og vejledningsområder

          Compilers, programming language technology, language design, games.
          Aktuel forskning

          Domain-specific languages, program semi-inversion.

          Primære forskningsområder
          Automatic program analysis and transformation (in particular partial evaluation and program semi-inversion), compiler technology (in particular for functional languages), domain-specific languages and occasionally algorithms, complexity, automata theory, fractals and graphics.`
      }
    }
  }

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <div className="profile-page">
        <Helmet title={msg.title} />

        <ProfileCard advisor={this.state.advisor} key={this.state.advisor.id} />

        <ProjectsList projects={this.state.advisor.projects} />

        <PublicationsList publications={this.state.advisor.publications} />
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
