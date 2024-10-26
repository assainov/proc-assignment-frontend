import React from 'react';
import { stripUnderscore } from './utils';
import { Table, TableCell, TableContainer, TableHeader, TableRow } from './ResultSection.styled';
import EmptySection from './EmptySection';
import { useResultStore } from 'views/state/useResultStore';

const ResultSection = () => {
  const data = useResultStore(state => state.result);

  const headers = [
    'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'
  ];

  if (!data) return <EmptySection />;

  return (
    <TableContainer>
      <Table>
        <tbody>
          {headers.map((header, index) => (
            <TableRow key={index}>
              <TableHeader>{stripUnderscore(header)}</TableHeader>
              <TableCell>{data[header] || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultSection;