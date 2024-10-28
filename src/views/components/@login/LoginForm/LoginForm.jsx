import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'services/authService/login';
import { useAuthStore } from 'state/useAuthStore';
import { Button } from 'views/components/@shared/Button/Button.styles';
import { Form, FormContainer, FormHeading, FormError } from 'views/components/@shared/Form/Form.styles';
import Input from 'views/components/@shared/Input/Input';
import { Spinner } from 'views/components/@shared/Loader/Loader.styles';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const setUser = useAuthStore(state => state.setUser);
  const isUserLoading = useAuthStore(state => state.isLoading);
  const setIsLoading = useAuthStore(state => state.setIsLoading);
  const setIsError = useAuthStore(state => state.setIsError);
  const setMessage = useAuthStore(state => state.setMessage);

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
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
    setIsLoading(true);
    const { error, data } = await login(email, password);

    if (error) {
      setIsError(true);
      setError(error);
      setMessage(error.message);
      setIsLoading(false);
      return;
    }

    setIsError(false);
    setIsLoading(false);
    setMessage('');
    setUser(data);

    navigate('/');
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
        <Button type="submit">
          {isUserLoading ? <Spinner /> : 'Login'}
        </Button>
        {error ? <FormError>{error}</FormError> : null}
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
