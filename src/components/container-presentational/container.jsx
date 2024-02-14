import React, { useEffect, useState } from 'react'

import Presentational from './presentational';


export default function Container() {
  const [dogs, setDogs] = useState([]);
  const [isFetching, toggleFetching] = useState(false);


  // For fetching images from API end-point
  useEffect(() => {
    toggleFetching(true);
    fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      .then(resp => resp.json())
      .then(({ message }) => setDogs(message))
    toggleFetching(false);
  }, [])


  if(isFetching) {
    return (
      <p>fetching...</p>
    )
  }

  return (
    <section className='dogs-container'>
      <Presentational dogsList={dogs} />
    </section>
  )
}
