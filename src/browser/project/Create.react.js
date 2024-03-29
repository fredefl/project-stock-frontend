import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/* Material UI */
import {TextField, List, ListItem, RaisedButton, Paper} from 'material-ui';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      authors: [],
      title: "",
      description: "",
      shortDescription: ""
    }

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  errorMessages = {
    titleError: "The title must be words",
    descriptionError: "The description must be words",
    shortDescription: "The short description"
  };

  handleChange (e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
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

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg, params: {id} } = this.props;
    let { titleError, descriptionError, shortDescriptionError } = this.errorMessages;

    var pageTitle = "Create Project";

    if ( typeof id != "undefined" ) {
      pageTitle = "Edit Project"
    }

    return (
      <div className="create-project-page">
        <Helmet title={"Project Create"} />

        <Paper style={{marginTop: "30px", padding: "30px"}}>
          <h1>{pageTitle}</h1>

          <Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <FormsyText
             name="title"
             validations="isWords"
             validationError={titleError}
             required
             hintText="Title text"
             floatingLabelText="Title"
             onChange={this.handleChange}
             value={this.state.title}
             className="input-div" />
            <FormsyText
             name="description"
             validations="isWords"
             validationError={descriptionError}
             hintText="Description text"
             floatingLabelText="Description"
             required
             onChange={this.handleChange}
             value={this.state.description}
             className="input-div" />
            <FormsyText
             name="shortDescription"
             validations="isWords"
             validationError={shortDescriptionError}
             hintText="Short description text"
             floatingLabelText="Short description"
             required
             onChange={this.handleChange}
             value={this.state.shortDescription}
             className="input-div" />
            <FormsyText
             name="author"
             validations="isWords"
             hintText="Author text"
             floatingLabelText="Author"
             required
             className="input-div" />
            <RaisedButton label="Save" primary={true} disabled={!this.state.canSubmit} className="button-div" />
          </Form>
        </Paper>
      </div>
    );
  }

}

Page = connect(state => ({
  msg: state.intl.msg.home
}))(Page);

export default Page;
