import './App.styl';
import Component from 'react-pure-render/component';
import Footer from './Footer.react';
import Header from './Header.react';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onAppComponentDidMount } from '../../common/app/actions';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };

  static childContextTypes = {
        muiTheme: PropTypes.object
  }

  getChildContext() {
      return {
          muiTheme: getMuiTheme(baseTheme)
      }
  }

  content() {
    const { dispatch, children } = this.props;

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        dispatch
      })
    );
  }

  // Note pattern how actions related to app start are dispatched.
  // componentDidMount is not called in ReactDOMServer.renderToString, so it's
  // the right place to dispatch client only (e.g. Firebase) actions.
  // Firebase can be used on the server as well, but it's over of this example.
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(onAppComponentDidMount());
  }

  render() {
    const { children, location } = this.props;

    return (
      <div className="page">
        <Helmet
          link={[
            { rel: 'shortcut icon', href: require('./favicon.ico') }
          ]}
          meta={[{
            name: 'description',
            content: 'Dev stack and starter kit for functional and universal React web apps'
          }]}
          titleTemplate="%s"
        />
        {/* Pass location to ensure header active links are updated. */}
        <Header location={location} />

        {this.content()}

        <Footer />
      </div>
    );
  }

}

// github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
export default connect((state, ownProps) => ({
  location: ownProps.location
}))(App);
