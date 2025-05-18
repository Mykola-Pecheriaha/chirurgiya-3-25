import React from 'react';
import { CarpalSyndrome } from '../../../components/CarpalSyndrome/CarpalSyndrome';
import { CarpalDetails } from '@/app/components/CarpalDetails';
import { CarpalTerapi } from '@/app/components/CarpalTerapi';
import CarpaltReabil from '@/app/components/CarpaltReabil';

const CarpalSyndromePage: React.FC = () => {
  return (
    <div>
      <CarpalSyndrome backgroundColor="#C8E8FFFF" />
      <CarpalDetails backgroundColor="#F4FBFFFF" />
      <CarpalTerapi backgroundColor="#C5E1F5FF" />
      <CarpaltReabil backgroundColor="#EAF7FFFF" />
    </div>
  );
};

export default CarpalSyndromePage;
