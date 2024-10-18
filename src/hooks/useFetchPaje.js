import { useState, useEffect} from 'react';

export const useFetchPaje = (pathToApi, loading, setLoading, looking = "") => {
  const [norm, setNorm] = useState([]);

  // Constructing the URL for fetching movie data
 
  const url = `https://api.themoviedb.org/3/${pathToApi}${looking}api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`;

  // Memoizing options to prevent re-creation on every render


  useEffect(() => {
    async function fetchMovieList() {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNorm(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Ensure loading is false after fetching
      }
    }

    fetchMovieList();
  }, [url,setLoading]); // Added setLoading to the dependency array

  return { norm };
};
