import React from 'react';
import Card1 from './Card1';

export default function CardsList(props) {
  const data = props.cards;
  const listItems = data.map((item, index) => (
    <Card1 key={index} heading={item.heading} p={item.p} />
  ));

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{listItems}</div>;
}
