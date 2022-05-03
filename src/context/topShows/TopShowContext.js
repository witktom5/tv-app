import { createContext, useState } from 'react';

// I want to fetch from this site once per visit on my page
// so I use context. least I can do to limit fetch requests

const TopShowsContext = createContext();

export const TopShowsProvider = ({ children }) => {
  const [topShows, setTopShows] = useState([]);

  return (
    <TopShowsContext.Provider value={{ topShows, setTopShows }}>
      {children}
    </TopShowsContext.Provider>
  );
};

export default TopShowsContext;
