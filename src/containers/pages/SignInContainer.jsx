import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { auth } from '../../redux';
import ViewContainer from '../ViewContainer';
import Form from '../../components/Form';
import Input from '../../components/Input';

const required = value => (value ? undefined : 'Required');

class SignInContainer extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <ViewContainer title="Sign In">
        <Form onSubmit={handleSubmit} disabled={false}>
          <Field name="email" type="text" label="Email" component={Input} validate={[required]} />
          <Field name="password" type="password" label="Password" component={Input} validate={[required]} />
          <Input type="submit" disabled={invalid} value="Enviar" />
        </Form>
      </ViewContainer>
    );
  }
}

SignInContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

const formSubmit = (values, dispatch) => {
  dispatch(auth.actions.signInWithEmail(values.get('email'), values.get('password')));
};

const formConfig = {
  form: 'signin',
  destroyOnUnmount: true,
  enableReinitialize: true,
  onSubmit: formSubmit,
};

export default connect()(reduxForm(formConfig)(SignInContainer));
