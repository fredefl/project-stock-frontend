import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, RaisedButton, Paper} from 'material-ui';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

class Page extends Component {

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
    titleError: "The title must be words",
    descriptionError: "The description must be words"
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

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;
    let {titleError, descriptionError} = this.errorMessages;

    return (
      <div className="partner-page">
        <Paper style={{marginTop: "30px", padding: "30px"}}>
          <h1>Create Project</h1>

          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <FormsyText
             name="title"
             validations="isWords"
             validationError={titleError}
             required
             hintText="Title text"
             floatingLabelText="Title"
             className="input-div" />
            <FormsyText
             name="description"
             validations="isWords"
             validationError={descriptionError}
             hintText="Description text"
             floatingLabelText="Description"
             required
             className="input-div" />
            <FormsyText
             name="author"
             validations="isWords"
             hintText="Author text"
             floatingLabelText="Author"
             required
             className="input-div" />
            <RaisedButton label="Save" primary={true} disabled={!this.state.canSubmit} className="button-div" />
          </Formsy.Form>
        </Paper>
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
