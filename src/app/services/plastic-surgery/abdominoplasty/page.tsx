import React from 'react';
import { Abdominoplasty } from '../../../components/Abdominoplasty';
import { AbdominoDetails } from '../../../components/AbdominoDetails';
import { AbdominoPreparation } from '../../../components/AbdominoPreparation';
import AbdominoFAQ from '../../../components/AbdominoFAQ';

const AbdominoplastyPage: React.FC = () => {
  return (
    <div>
      <Abdominoplasty backgroundColor="#C4DFFCFF" />
      <AbdominoDetails backgroundColor="#E2EEFDFF" />
      <AbdominoPreparation backgroundColor="#C4DFFCFF" />
      <AbdominoFAQ backgroundColor="#E2EEFDFF" />
    </div>
  );
};

export default AbdominoplastyPage;
