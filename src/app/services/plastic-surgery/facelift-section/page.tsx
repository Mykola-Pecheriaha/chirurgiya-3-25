import React from 'react';
import FaceliftSection from '../../../components/FaceliftSection';
import FaceliftDetails from '../../../components/FaceliftDetails';
import FaceLiftPreparation from '../../../components/FaceLiftPreparation/FaceLiftPreparation';

const FaceliftSectionPage: React.FC = () => {
  return (
    <div>
      <FaceliftSection backgroundColor="#E6DDF7FF" />
      <FaceliftDetails backgroundColor="#f8f4ff" />
      <FaceLiftPreparation backgroundColor="#f8f4ff" />
    </div>
  );
};

export default FaceliftSectionPage;
