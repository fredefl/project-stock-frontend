import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem} from 'material-ui';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false
    }
  }

  enableButton () {
    this.setState({
      canSubmit: true
    });
  }

  disableButton () {
    this.setState({
      canSubmit: false
    });
  }

  submit () {

  }

  errorMessages : {
    title: "The title must be words",
    description: "The description must be words"
  }

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <div></div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
