import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import ViewContainer from '../ViewContainer';
import Form from '../../components/Form';
import Input from '../../components/Input';

const required = value => (value ? undefined : 'Required');

class SignUpContainer extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <ViewContainer title="Sign Up">
        <Form onSubmit={handleSubmit} disabled={false}>
          <Field name="username" type="text" label="Username" component={Input} validate={[required]} />
          <Field name="email" type="text" label="Email" component={Input} validate={[required]} />
          <Input type="submit" disabled={invalid} value="Enviar" />
        </Form>
      </ViewContainer>
    );
  }
}

SignUpContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

const formSubmit = () => {
  window.alert('dsds');
};

const formConfig = {
  form: 'signup',
  destroyOnUnmount: true,
  enableReinitialize: true,
  onSubmit: formSubmit,
};

export default connect()(reduxForm(formConfig)(SignUpContainer));
