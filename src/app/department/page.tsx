import React from 'react';
import Department from '../components/Department';

const DepartmentsPage: React.FC = () => {
  return (
    <div>
      <Department backgroundColor="#f0f7ff" cardsPerRow={3} />
    </div>
  );
};

export default DepartmentsPage;
