import React from 'react';
import Creative1 from './Creative1';

function CreativeList({ Creative }) {
  const listItems = Creative.map((item, index) => (
    <Creative1
      key={index}
      name={item.name}
      field={item.field}
      image={item.image}
    />
  ));

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center">{listItems}</div>;
}

export default CreativeList;
