import React, { useState } from 'react';
import { Button } from 'views/components/@shared/Button/Button.styles';
import { Form, FormContainer, FormHeading, FormError } from 'views/components/@shared/Form/Form.styles';
import Input from 'views/components/@shared/Input/Input';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const { firstname, surname, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !surname || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log(formData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Signup Form</FormHeading>
        <Input
          label="First name"
          name="firstname"
          onChange={handleChange}
          placeholder="First name"
          type="text"
          value={firstname}
        />
        <Input
          label="Surname"
          name="surname"
          onChange={handleChange}
          placeholder="Surname"
          type="text"
          value={surname}
        />
        <Input
          label="Email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        <Input
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={password}
        />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
        />
        <Button type="submit">Create account</Button>
        {error ? <FormError>{error}</FormError> : null}
      </Form>
    </FormContainer>
  );
};

export default SignupForm;