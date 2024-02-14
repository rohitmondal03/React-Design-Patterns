import React from 'react'

export default function Presentational({ dogsList }) {
  return dogsList.map((link) => (
    <img
      src={link}
      key={link}
      alt='dog-image'
      loading='lazy'
    />
  ))
}
