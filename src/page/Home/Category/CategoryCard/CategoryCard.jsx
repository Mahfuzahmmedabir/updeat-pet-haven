import React from 'react';
import Cards from './Cards';

const CategoryCard = ({ item }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {item.map(card => (
        <Cards item={card} key={card._id}></Cards>
      ))}
    </div>
  );
};

export default CategoryCard;
