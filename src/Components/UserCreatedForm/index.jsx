import React from 'react'
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {createUser} from '../../actions';

const UserCreatedForm = (props) => {
  const {createUserAction} = props;
  const initialValues = {
    login: '',
    email: '',
  };
  
  const submitHandler = (values) => {
    createUser(values);
  };


  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {formikProps => {
            return(
                <Form>
                    <Field name='login' placeholder='login' />
                    <Field name='email' placeholder='email' />
                    <button type='submit'>create new user</button>
                </Form>
            )
        }}
    </Formik>
  )
}

const mapStateToProps = (state) => state.userReduser;
const mapDispatchToProps = (dispatch) => {
    return {
        createUserAction: data => {dispatch(createUser(data))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCreatedForm);
