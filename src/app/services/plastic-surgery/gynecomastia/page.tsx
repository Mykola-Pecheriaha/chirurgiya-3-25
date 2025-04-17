import React from 'react';
import Ginecomastiya from '../../../components/Ginecomastiya';
import GinecomastiyaIndications from '../../../components/GinecomastiyaIndications';
import GinecomastiyaPreparation from '../../../components/GinecomastiyaPreparation/GinecomastiyaPreparation';
import GinecomastiyaFAQ from '../../../components/GinecomastiyaFAQ/GinecomastiyaFAQ';

const GinecomastiyaPage: React.FC = () => {
  return (
    <div>
      <Ginecomastiya />
      <GinecomastiyaIndications backgroundColor="#E4EDF5FF" />
      <GinecomastiyaPreparation backgroundColor="#C0DCF5FF" />
      <GinecomastiyaFAQ backgroundColor="#f0f0f0" />
    </div>
  );
};

export default GinecomastiyaPage;
