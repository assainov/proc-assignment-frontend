import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 700px;

  font-size: ${({ theme }) => theme.fontSizes.desktop.input};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const FormHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.desktop.h2};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormError = styled.p`
  color: red;
  margin-bottom: 1rem;
`;