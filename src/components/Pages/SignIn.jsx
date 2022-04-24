import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "../css/signIn.css"

const SignIn = () => {
  // form validation rules 
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('Full name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Please accept terms')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    console.log(data);
    return false;
  }

  return (
    <div id="signin-content">
      <div className="form-container">
        <h1>Register</h1>
        <form className="formContact" id="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="formContact">
            <label>First Name</label>
            <input name="fullname" type="text" {...register('fullname')} className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.fullname?.message}</div>
          </div>
          <div className="formContact">
            <label>Email</label>
            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="formContact">
            <label>Password</label>
            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="formContact">
            <label>Confirm Password</label>
            <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
          </div>
          <div id="row">
            <div className='accept-div'>
              <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className='checkbox' />
              <p htmlFor="acceptTerms" className="label-terms">Accept Terms & Conditions</p>
            </div>
              
            <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
          </div>

          <div className="terms" id="action">
            <button type="submit" className="btn">Register</button>
            <button type="button" className="btn" onClick={() => reset()}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;