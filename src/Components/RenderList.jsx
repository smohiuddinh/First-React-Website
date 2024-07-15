import React from 'react'

export default function RenderList() {
  return (
    <ul>
    {items.map((item, index) => (
      <li key={index} href={item.href}>
        {item.text}
      </li>
    ))}
  </ul>
  )
}
