import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import TshirtCard from './TshirtCard';

const GET_TSHIRTS = gql`
  query GetTshirts($color: String, $size: String) {
    tshirts(color: $color, size: $size) {
      tshirtId
      size
      color
      description
      price
      quantity
    }
  }
`;

function Tshirts() {
  const [searchParams, setSearchParams] = useState({});
  const { loading, error, data } = useQuery(GET_TSHIRTS, {
    variables: { ...searchParams },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const { color, size } = e.target.elements;
    setSearchParams({
      color: color.value || null,
      size: size.value || null,
    });
  };

  if (loading) return <p>Loading T-shirts...</p>;
  if (error) return <p>Error loading T-shirts.</p>;

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">T-Shirts</h2>
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          name="color"
          placeholder="Search by Color"
          className="flex-grow border p-2 m-1 rounded"
        />
        <input
          type="text"
          name="size"
          placeholder="Search by Size"
          className="flex-grow border p-2 m-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 m-1 rounded">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.tshirts?.map((tshirt) => (
          <TshirtCard key={tshirt.tshirtId} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

export default Tshirts;
