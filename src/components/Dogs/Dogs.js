import React, { useState, useEffect } from 'react';
import './Dogs.css';


const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch('https://dog.ceo/api/breed/doberman/images');
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      setDogs(responseData.message);
      setIsLoading(false);
    }

    fetchDogs().catch(error => {
      setIsLoading(false);
      setHttpError(error.message); 
    });
    
  }, [])
    
  if (isLoading) {
    return (
      <section className='dog-list'>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className='dog-list'>
        <p className=''>{httpError}</p>
      </section>
    )
  }

  console.log(dogs);
  const dogList = dogs.slice(0,12).map((dog , index) =>
    <img 
      key={index}
      src={dog}
      alt='dog'
    /> 
  );

  return (
    <section className='dog-list'>
      {dogList}
    </section>
    )
}

export default Dogs
