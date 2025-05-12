import React from 'react';
import { OperatingRoom } from '@/app/components/OperatingRoom';
import { OperationGallery } from '@/app/components/OperationGallery';
import { OperatingSterility } from '@/app/components/OperatingSterility';
import { OperModernEquipment } from '@/app/components/OperModernEquipment';
import { OperProfessional } from '@/app/components/OperProfessional';

const OperatingRoomPage: React.FC = () => {
  return (
    <div>
      <OperatingRoom backgroundColor="#A3E4FDFF" />
      <OperationGallery />
      <OperatingSterility backgroundColor="#f0f5ff" />
      <OperModernEquipment backgroundColor="#f0f7ff" />
      <OperProfessional backgroundColor="#f0f7ff" />
    </div>
  );
};

export default OperatingRoomPage;
