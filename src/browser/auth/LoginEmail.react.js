import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fetch from '../../common/components/fetch'
import * as loginActions from '../../common/login/actions';
import focusInvalidField from '../lib/focusInvalidField';
import { fields } from '../../common/lib/redux-fields';
import { replace } from 'react-router-redux';

/* Material UI */
import {TextField, List, ListItem, RaisedButton, Paper} from 'material-ui';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

class LoginEmail extends Component {

  static propTypes = {
    fields: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
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

  submit ( data ) {
    const { dispatch } = this.props;
    console.log(data);
    dispatch(loginActions.login(data, data));
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

          <Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <FormsyText
             name="email"
             validations="isEmail"
             validationError={emailError}
             required
             hintText="Email"
             floatingLabelText="Email"
             className="input-div"
             {...fields.email}
             />
            <RaisedButton type="submit" label="Login" primary={true} disabled={!this.state.canSubmit} className="button-div" />
          </Form>
        </Paper>
      </div>
    );
  }

}

LoginEmail = fields(LoginEmail, {
  path: 'login',
  fields: ['email']
});

export default connect(state => ({
  login: state.login
}), { ...loginActions, replace })(LoginEmail);
