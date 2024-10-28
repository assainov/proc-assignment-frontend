import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${pr => pr.theme.colors.transparent};
  border-radius: ${pr => pr.theme.borderRadiuses.default};

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  padding: 0.5rem 1rem;
  font-size: 1rem;

  width: 300px;
  cursor: pointer;

  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.button};
    transform: translateY(-2px);
  }

  transition: all 0.3s ease-in-out;
`;