import React from 'react';
import { ErrorMessage } from './ResultSection.styled';

const ErrorSection = ({message}) => (
  <ErrorMessage>
    <p>
      There was an error loading the data.
    </p>
    <p>
      Details: {message}
    </p>
  </ErrorMessage>
);

export default ErrorSection;