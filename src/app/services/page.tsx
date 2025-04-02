import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Services backgroundColor="#f0f7ff" cardsPerRow={3} />
    </div>
  );
};

export default ServicesPage;
