import React, { useState } from 'react';
import '../styles/SearchBar.css'
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined'; // Importing search icon from react-icons

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='searchBarBox'>
        <div className='searchBarInput'>
        <LeaderboardOutlinedIcon className='searchbarIcon'/>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        </div>
    </form>
  );
};

export default SearchBar;
