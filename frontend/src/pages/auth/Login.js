import React from 'react';
import Input from '../../shared/formElements/Input';
import '../../shared/formElements/FormStyle.css';
import Button from '../../shared/formElements/Button';

//add validation
//required fields
//Disclaimers
//Privacy policy
//Terms and conditions
//Remember Me

const Login = (props) => {
  return (
    <div className='formStyle'>
      <form>
        <h2>Login</h2>
        <Input element='input' type='text' placeholder='First Name' required />
        <Input element='input' type='text' placeholder='Last Name' required />
        <Input element='input' type='email' placeholder='Email' required />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Login;
