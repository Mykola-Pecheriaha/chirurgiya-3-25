import React from 'react';
import Gerniotomiya from '../../../components/Gerniotomiya';
import GerniotomiyaDetails from '../../../components/GerniotomiyaDetails';
import GerniotomiyaIndicatio from '../../../components/GerniotomiyaIndicatio';
import { GernioPreparation } from '../../../components/GernioPreparation';
import GernioFAQ from '../../../components/GernioFAQ';

const GerniotomiyaPage: React.FC = () => {
  return (
    <div>
      <Gerniotomiya backgroundColor="#C4DFFCFF" />
      <GerniotomiyaDetails backgroundColor="#E2EEFDFF" />
      <GerniotomiyaIndicatio backgroundColor="#C4DFFCFF" />
      <GernioPreparation backgroundColor="#E2EEFDFF" />
      <GernioFAQ backgroundColor="#C4DFFCFF" />
    </div>
  );
};

export default GerniotomiyaPage;
