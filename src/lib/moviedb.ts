// Global exported functions to query from the MovieDB api
// using the node.js MovieDB library. 

import { MovieDb } from "moviedb-promise"
const moviedb = new MovieDb(process.env.TMDB_API_KEY!)
export default moviedb;

const newError = (name: string) => {
  const e = new Error(name)
  e.name = name
  return Promise.reject(e)
}

type SearchMovieRequest = {
  query: {
    name: string
    page?: number,
    language?: string
  }
}

export const searchMovie = async (req: SearchMovieRequest) => {
  const parameters = {
    query: req.query.name as string,
    page: req.query.page as number,
    language: req.query.language as string
  }
  try {
    const res = await moviedb.searchMovie(parameters)
    return res.results
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return newError(message)
  }
}

export const searchPerson = async (req: SearchMovieRequest) => {
  const parameters = {
    query: req.query.name as string,
    page: 1,
  }
  try {
    const res = await moviedb.searchPerson(parameters)
    return res.results
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return newError(message)
  }
}

export type Movie = {
  id?: number
  title?: string
  poster_path?: string
  backdrop_path?: string
  overview?: string
  release_date?: string
  vote_average?: number
  vote_count?: number
  popularity?: number
  adult?: boolean
  genre_ids?: number[]
  original_language?: string
  original_title?: string
  video?: boolean
}