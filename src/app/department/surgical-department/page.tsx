import React from 'react';
import { SurgicalDepartment } from '@/app/components/SurgicalDepartment';
import { DepartmentGalleryWrapper } from '@/app/components/DepartmentGallery';
const UrologPage: React.FC = () => {
  return (
    <div>
      <SurgicalDepartment backgroundColor="#B6DEF8FF" />
      <DepartmentGalleryWrapper backgroundColor="#f0f7ff" />
    </div>
  );
};

export default UrologPage;
