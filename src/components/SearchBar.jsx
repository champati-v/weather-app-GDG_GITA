import React from 'react'

function SearchBar({setCity, fetchWeather}) {
const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    setCity(city);
    fetchWeather(city);
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='city' className='border border-black px-3 py-2 rounded-md' placeholder='Enter the name of city' />
        <button className='bg-blue-600 border border-white text-white px-3 py-2 rounded-md' type='submit'>Search Weather</button>
    </form>
  )
}

export default SearchBar