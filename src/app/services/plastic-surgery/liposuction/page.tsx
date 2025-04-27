import React from 'react';
import Liposuction from '../../../components/Liposuction';
import { LiposuctionDetails } from '../../../components/LiposuctionDetails';
import { LiposuctionIndicatio } from '../../../components/LiposuctionIndicatio';
import { LiposuctionPreparation } from '../../../components/LiposuctionPreparation';

const LiposuctionPage: React.FC = () => {
  return (
    <div>
      <Liposuction backgroundColor="#C4DFFCFF" />
      <LiposuctionDetails backgroundColor="#E2EEFDFF" />
      <LiposuctionIndicatio backgroundColor="#C4DFFCFF" />
      <LiposuctionPreparation backgroundColor="#f8f9fa" />
    </div>
  );
};

export default LiposuctionPage;
