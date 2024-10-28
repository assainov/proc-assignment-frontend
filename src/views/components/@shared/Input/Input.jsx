import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 300px;
`;

const StyledInput = styled.input`
  border: 1px solid ${pr => pr.theme.colors.transparent};
  border-radius: ${pr => pr.theme.borderRadiuses.default};
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    background-color: ${pr => pr.theme.colors.white};
    transition: background-color 0.3s;
  }

  font-size: ${pr => pr.theme.fontSizes.desktop.input};
  box-shadow: ${pr => pr.theme.boxShadows.input};
  color: ${pr => pr.theme.colors.darkGray};

  &::placeholder {
    color: ${pr => pr.theme.colors.darkGray};
    font-size: ${pr => pr.theme.fontSizes.desktop.input};
  }
`;

const Input = ({ type = 'text', name, value, onChange, placeholder }) => (
  <InputWrapper>
    <StyledInput
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </InputWrapper>
);

export default Input;