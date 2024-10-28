import React, { useState } from 'react';
import { Button } from 'views/components/@shared/Button/Button.styles';
import { Form, FormContainer, FormHeading, FormError } from 'views/components/@shared/Form/Form.styles';
import Input from 'views/components/@shared/Input/Input';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = formData;

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
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    if (password.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }
    setError('');
    console.log(formData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Login Form</FormHeading>
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
        <Button type="submit">Login</Button>
        {error ? <FormError>{error}</FormError> : null}
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
