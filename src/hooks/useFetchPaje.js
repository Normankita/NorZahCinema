import { useState, useEffect } from 'react'

export const useFetchPaje = (pathToApi, loading, setLoading, looking="") => {
   const [norm, setNorm] = useState([])

   //getting data movie configuration
   const url = `https://api.themoviedb.org/3/${pathToApi}${looking}language=en-US&page=1`;
   const options = {
   method: 'GET',
   headers: {
   accept: 'application/json',
   Authorization: `Bearer ${process.env.REACT_APP_token}`
}
   };

   //executing

    useEffect(()=>{

        async function fetchMovieList() {
            setLoading(true)
            const response= await fetch(url, options)
            const data = await response.json()
            setNorm(data.results)
            setLoading(false)
            console.log(norm)
        }
        fetchMovieList();
},[url])
  return {norm}
}

