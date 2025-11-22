import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${query.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full bg-gray-700 text-white rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold rounded-r-full px-4 hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;