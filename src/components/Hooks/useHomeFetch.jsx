// import { useEffect, useState } from "react";
// import apiSettings from "../../API";

// const initialState = {
//   page: 0,
//   results: [],
//   total_pages: 0,
//   total_results: 0,
// };

// export const useHomeFetch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [state, setState] = useState(initialState);
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState(false);
//   const [isLoadingMore, setIsLoadingMore] = useState(false);

//   const getMovies = async (page, searchTerm = "") => {
//     try {
//       setError(false);
//       setLoader(true);
//       console.log(page);
//       const movies = await apiSettings.fetchMovies(searchTerm, page);
//       setState((prev) => ({
//         ...movies,
//         results:
//           page > 0 ? [...prev.results, ...movies.results] : [...movies.results],
//       }));
//     } catch {
//       setError(true);
//     }
//     setLoader(false);
//   };

//   useEffect(() => {
//     setState(initialState);

//     getMovies(1, searchTerm);
//     console.log(state);
//   }, [searchTerm]);

//   //Load More
//   useEffect(() => {
//     if (!isLoadingMore) return;

//     getMovies(state.page + 1, searchTerm);
//     setIsLoadingMore(false);
//   }, [isLoadingMore, state.page, searchTerm]);

//   return { state, loader, error, setSearchTerm, searchTerm, setIsLoadingMore };
// };
