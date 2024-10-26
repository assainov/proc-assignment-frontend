import styled from 'styled-components';
import { device } from 'views/styles/responsive';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: ${pr => pr.theme.borderRadiuses.default};

  width: 746px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobile} {
    width: 300px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${pr => pr.theme.backgrounds.lightGray};
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 16px;
  background-color: ${pr => pr.theme.backgrounds.lightGray};
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 16px;
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  padding: 6rem 2rem 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 6rem 2rem 0;
  color: ${pr => pr.theme.colors.darkGray};
`;