import React from 'react';
import usePets from '../../hooks/usePets/usePets';
import CategoryCard from '../Home/Category/CategoryCard/CategoryCard';
import { Helmet } from 'react-helmet-async';

const PetList = () => {
  const [pets] = usePets()
  return (
    <div>
      <Helmet>
        <title>
          Pet-Haven || Pet List
      </title>
      </Helmet>
      <CategoryCard item={pets}></CategoryCard>
    </div>
  );
};

export default PetList;