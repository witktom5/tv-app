import { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null);
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData, searchText, setSearchText }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
