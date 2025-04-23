import React from 'react';
import { Abdominoplasty } from '../../../components/Abdominoplasty';
import { AbdominoDetails } from '../../../components/AbdominoDetails';
import { AbdominoPreparation } from '../../../components/AbdominoPreparation';

const AbdominoplastyPage: React.FC = () => {
  return (
    <div>
      <Abdominoplasty backgroundColor="#CFE5FCFF" />
      <AbdominoDetails backgroundColor="#E8F0FAFF" />
      <AbdominoPreparation backgroundColor="#f8f9fa" />
    </div>
  );
};

export default AbdominoplastyPage;
