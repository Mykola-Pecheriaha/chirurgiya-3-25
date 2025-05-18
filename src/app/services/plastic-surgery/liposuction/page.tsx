import React from 'react';
import Liposuction from '../../../components/Liposuction';
import { LiposuctionDetails } from '../../../components/LiposuctionDetails';
import { LiposuctionIndicatio } from '../../../components/LiposuctionIndicatio';
import { LiposuctionPreparation } from '../../../components/LiposuctionPreparation';
import { LiposuctionFAQ } from '../../../components/LiposuctionFAQ';

const LiposuctionPage: React.FC = () => {
  return (
    <div>
      <Liposuction backgroundColor="#C4DFFCFF" />
      <LiposuctionDetails backgroundColor="#f8f9fa" />
      <LiposuctionIndicatio backgroundColor="#C4DFFCFF" />
      <LiposuctionPreparation backgroundColor="#f8f9fa" />
      <LiposuctionFAQ backgroundColor="#C4DFFCFF" />
    </div>
  );
};

export default LiposuctionPage;
