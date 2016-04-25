import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../../common/auth/actions';
import focusInvalidField from '../lib/focusInvalidField';
import { fields } from '../../common/lib/redux-fields';
import { replace } from 'react-router-redux';

/* Material UI */
import {TextField, List, ListItem, RaisedButton, Paper} from 'material-ui';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

class LoginEmail extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    fields: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    msg: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false
    }

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
  }

  errorMessages = {
    errorEmail: "Email must be a valid email"
  };

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

  render() {
    const { msg } = this.props;
    let {emailError} = this.errorMessages;

    return (
      <div className="login-email-page">
        <Paper style={{marginTop: "30px", padding: "30px"}}>
          <h1>Login</h1>

          <p className="page-help-text">
            Enter your KU-email to login. You will recieve an email with a link,
            that link will log you into the system.
          </p>

          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <FormsyText
             name="title"
             validations="isEmail"
             validationError={emailError}
             required
             hintText="Email"
             floatingLabelText="Email"
             className="input-div" />
            <RaisedButton label="Login" primary={true} disabled={!this.state.canSubmit} className="button-div" />
          </Formsy.Form>
        </Paper>
      </div>
    );
  }

}

LoginEmail = fields(LoginEmail, {
  path: 'auth',
  fields: ['email']
});

export default connect(state => ({
  auth: state.auth,
  msg: state.intl.msg.auth.form
}), { ...authActions, replace })(LoginEmail);
