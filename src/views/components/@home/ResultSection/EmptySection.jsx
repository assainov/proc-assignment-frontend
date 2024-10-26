import React from 'react';
import { EmptyState } from './ResultSection.styled';
import { TbInbox } from 'react-icons/tb';

const EmptySection = () => (
  <EmptyState>
    <TbInbox size={40}/>
    <p>No result available. Start searching.</p>
  </EmptyState>
);

export default EmptySection;