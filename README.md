# TV Show Finder

[Live version](https://tvshow-finder.netlify.app/)

## Overview

A webapp that fetches TV show data from two APIs: [TV API (TVmaze)](https://www.tvmaze.com/api) & [TV Shows API (EpisoDate)](https://www.episodate.com/api) and displays the data. It allows to search for TV shows by their titles (with the use of TVmaze), and it also displays 5 most popular shows according to EpisoDate.

Top shows number could be higher, but I wanted to limit HTTP requests to minimum. For the same reason, TV show data after retrieving is kept in global context. This also allows for smoother user experience, as it makes it possible to instantly go back to current TV show search results without re-fetching the data. Search data can be cleared by clicking the "Back to search" button, allowing for another search.

After getting the TV shows data, user can visit individual subpages of each show to get, if there is one, a larger size image and more detailed information of a given TV show.

It is responsive and comes with a togglable dark mode.

## Technologies

React 18 with React Router v6 were used as the front-end framework. Axios was used to handle fetch requests from the API. Tailwind and DaisyUI as well as some custom CSS were used for the UI. There is also a few icons from Font Awesome (react-icons/fa).

## License

The MIT License
